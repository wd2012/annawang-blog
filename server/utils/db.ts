import path from 'path';
import { createConnection, getConnectionManager, ConnectionOptions} from "typeorm";
import * as mysql from 'mysql';
const dbConfig = {
  type: 'mysql',
  host: '1.14.19.228',
  port: '3306',
  username: 'root',
  password: '123456',
  database: 'anna_blog',
};

const connections = mysql.createConnection({
  host: '1.14.19.228',
  user: 'root',
  password: '123456',
  database: 'anna_blog'
});
 
connections.connect();

// const options = {
//   type: dbConfig.type,
//   host: dbConfig.host,
//   port: dbConfig.port || '',
//   username: dbConfig.username || '',
//   password: dbConfig.password || '',
//   database: dbConfig.database || '',
//   entities: [
//     path.resolve(__dirname, '../modules/*/entity/*.model.[jt]s'),
//   ],
//   // synchronize: process.env.NODE_ENV === 'development' ? true : false,
//   synchronize: false,
//   logging: ['error'],
// } as ConnectionOptions;

let connection: any; 
// createConnection(options).then((connection) => {
//   console.log('**********entities', options.entities);
//   console.log(`*******连接成功啦***************`);
//   console.log(`Database connection:${connection.name} is established!>>>>>>>>>>>>>>>>>>>>>`);

// }).catch((e) => {
//   console.log('数据库连接失败------_______', e);
//   if (e.code === 'PROTOCOL_CONNECTION_LOST') {
//     connection?.connect();
//   }
// });

// connection = getConnectionManager().get('default');
export default connection;