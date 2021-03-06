import path from 'path';
import { createConnection, getConnectionManager, ConnectionOptions} from "typeorm";

const dbConfig = {
  type: 'mysql',
  host: '1.14.19.228',
  port: '3306',
  // username: 'root',
  username: 'anna_blog',
  password: '123456',
  database: 'anna_blog',
};
// const dbConfig = {
//   type: 'mysql',
//   host: 'localhost',
//   port: '3306',
//   username: 'root',
//   password: 'wd398897501',
//   database: 'anna_blog',
// };

const options = {
  type: dbConfig.type,
  host: dbConfig.host,
  port: dbConfig.port || '',
  username: dbConfig.username || '',
  password: dbConfig.password || '',
  database: dbConfig.database || '',
  entities: [
    path.resolve(__dirname, '../modules/*/entity/*.model.[jt]s'),
  ],
  // synchronize: process.env.NODE_ENV === 'development' ? true : false,
  synchronize: true,
  logging: ['error'],
} as ConnectionOptions;

createConnection(options).then((connection) => {
  console.log('**********entities', options.entities);
  console.log(`*******连接成功啦***************`);
  console.log(`Database connection:${connection.name} is established!>>>>>>>>>>>>>>>>>>>>>`);

}).catch((e) => {
  console.log('数据库连接失败------_______', e);
  
});

export default getConnectionManager().get('default');