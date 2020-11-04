"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexRoute = void 0;
var express_1 = require("express");
// Controller
var controllerIndex_1 = require("../../controllers/controllerIndex");
var IndexRoute = /** @class */ (function () {
    function IndexRoute() {
        this.router = express_1.Router();
        this.initRoutes();
    }
    IndexRoute.prototype.initRoutes = function () {
        this.router.get('/', controllerIndex_1.indexController.index);
    };
    return IndexRoute;
}());
exports.IndexRoute = IndexRoute;
