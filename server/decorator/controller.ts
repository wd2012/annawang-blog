import 'reflect-metadata';
import { Application, Router } from 'express';
import glob from 'glob';
import { METHOD, PATH, PREFIX } from "./const";
import { isConstructor, isFunction } from './../utils/';
import path from "path";


interface RouterObj {
  path: string;
  method: string;
  handler(): void;
  prefix: string;
};


const controllers: Function[] = [];

export function Controller(path: string) {
  return (target: Function) => {
    controllers.push(target);
    Reflect.defineMetadata(PREFIX, path, target);
  }
}

/**
 * 构建路由
 */
export function mountRouter(): Router {
  const router = Router();

  // logger.info('引入 controller');
  mountController(path.resolve(__dirname, '../modules/**/*controller.[jt]s'));

  // logger.info('获取路由 map');
  const RouterObjArr: RouterObj[] = mapRouter();

  RouterObjArr.forEach(routerObj => {
    const { path, method, handler, prefix } = routerObj;
    const requestPath = `${prefix}${path}`;
    // @ts-ignore
    router[method](requestPath, handler);
  });
  return router;
}

/**
 * 获取所有的 controller 并 require controller
 * @param app
 * @param modulesPath
 */
export function mountController(modulesPath: string) {
  // logger.info('controller 模块路径：', modulesPath);
  const controllerPaths = glob.sync(modulesPath, {nodir: true});
  // logger.info(controllerPaths[0])
  // logger.info(`controller 有：${controllerPaths.length}个`);
  // 导入 controllers
  controllerPaths.map(controllerPath => {
    require(controllerPath);
  });
}

function mapRouter(): RouterObj[] {
  const mapRouter: RouterObj[] = [];
  // 实例化 controller
  controllers.forEach((controller, index) => {
    const prefix = Reflect.getMetadata(PREFIX, controller);
    // @ts-ignore
    const controllerInstance = new controller();
    // 获取原型对象
    const prototype = Object.getPrototypeOf(controllerInstance);
    // 获取原型对象所有属性
    const keys = Object.getOwnPropertyNames(prototype);
    // 获取原型对象的办法
    const methodNames = keys.filter(key => !isConstructor(key) && isFunction(prototype[key]));
    // 获取办法的信息
    methodNames.forEach(name => {
      const method = Reflect.getMetadata(METHOD, prototype, name);
      const path = Reflect.getMetadata(PATH, prototype, name);
      mapRouter.push({
        method,
        path,
        prefix,
        handler: prototype[name]
      });
    });
  });
  return mapRouter;
}