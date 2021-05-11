import 'reflect-metadata';
import { METHOD, PATH } from "./const";

/**
 * 创建请求办法的装饰器
 * @param method
 */
function createMethodDecorator(method: string): Function {
  return (path: string = ''): MethodDecorator => {
    return (target: any, key: any, descriptor: PropertyDescriptor): void => {
      let fixPath = '';
      if (path) fixPath = path.startsWith('/') ? path : `/${path}`;
      Reflect.defineMetadata(PATH, fixPath, target, key);
      Reflect.defineMetadata(METHOD, method, target, key);
    };
  };
}

// 获取
export const Get = createMethodDecorator('get');

// 提交
export const Post = createMethodDecorator('post');

// 修改
export const Put = createMethodDecorator('put');

// 删除
export const Delete = createMethodDecorator('delete');