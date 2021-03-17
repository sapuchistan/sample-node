import { createServer } from 'http';
import logger from './config/Winston';

// const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req : any, res : any) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mundo');
});

server.listen(port, hostname, () => {
  logger.info('Test info Log!');
  logger.error('Test error Log!');
  logger.info(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
