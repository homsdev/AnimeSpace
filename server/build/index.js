"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var config_1 = require("./config/config");
//Routes
var routes_1 = require("./routes/routes");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        this.app.set('port', config_1.options.port);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    };
    Server.prototype.routes = function () {
        this.app.use(routes_1.indexRouter);
        this.app.use('/anime', routes_1.animeRouter);
    };
    Server.prototype.listen = function () {
        this.app.listen(config_1.options.port, function () {
            console.log("Server is listening on " + config_1.options.port);
        });
    };
    return Server;
}());
var server = new Server();
server.listen();
