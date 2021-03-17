"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
var fs_1 = __importDefault(require("fs"));
var winston_1 = __importDefault(require("winston"));
var logDir = 'log';
if (!fs_1.default.existsSync(logDir)) {
    fs_1.default.mkdirSync(logDir);
}
// const tsFormat = () => (new Date()).toLocaleTimeString();
var logger = winston_1.default.createLogger({
    transports: [
        new (winston_1.default.transports.Console)({
            format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.timestamp(), winston_1.default.format.align(), winston_1.default.format.simple()),
            level: 'info',
        }),
        /* eslint-disable global-require */
        new (require('winston-daily-rotate-file'))({
            filename: logDir + "/-results.log",
            format: winston_1.default.format.combine(winston_1.default.format.timestamp(), winston_1.default.format.json()),
        }),
        /* eslint-enable global-require */
        new winston_1.default.transports.File({
            filename: 'log/error.log',
            level: 'error',
            format: winston_1.default.format.combine(winston_1.default.format.timestamp(), winston_1.default.format.simple()),
        }),
    ],
});
exports.default = logger;
