import path from 'path';
import bodyParser from 'body-parser';
import express, { Application, NextFunction, Request, Response } from 'express';


const app = express();



const limitSize = 100 * 1024 * 1024;
// 解析 application/json
app.use(bodyParser.json());

// 解析 application/x-www-form-urlencoded      true 是用 qs 代替 querystring
app.use(bodyParser.urlencoded({
  extended: true,
  limit: `${limitSize}kb`,
} as bodyParser.OptionsUrlencoded));

app.use('/api',(req: Request, res: Response) => {
  console.log('req', req);
  res.json('success');
});
export default app;