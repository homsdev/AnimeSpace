"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
var config_1 = require("./config");
var mysql_1 = __importDefault(require("mysql"));
exports.pool = mysql_1.default.createPool(config_1.database);
exports.pool.getConnection(function (err, connection) {
    if (err) {
        switch (err.code) {
            case 'PROTOCOL_CONNECTION_LOST':
                console.log("Database connection was closed " + err.code);
                break;
            case 'ER_CON_COUNT_ERROR':
                console.log("Database has too many connections " + err.code);
                break;
            case 'ECONNREFUSED':
                console.log("Database connection was refused " + err.code);
                break;
            default:
                console.log("Connection error: " + err.code);
        }
    }
    else if (connection) {
        exports.pool.releaseConnection(connection);
        console.log("Database has been succesfully connected");
    }
});
