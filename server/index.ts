import http from 'http';
import app from './app';

const port = process.env.PORT || 3000;
http.createServer(app).listen(port, () => {
  console.info(`server start port ${port}`);
});
