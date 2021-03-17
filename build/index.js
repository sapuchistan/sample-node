"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var Winston_1 = __importDefault(require("./config/Winston"));
// const http = require('http');
var hostname = '127.0.0.1';
var port = 3000;
var server = http_1.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo');
});
server.listen(port, hostname, function () {
    Winston_1.default.info('Test info Log!');
    Winston_1.default.error('Test error Log!');
    Winston_1.default.info("El servidor se est\u00E1 ejecutando en http://" + hostname + ":" + port + "/");
});
