"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexController = void 0;
var IndexController = /** @class */ (function () {
    function IndexController() {
    }
    IndexController.prototype.index = function (req, res) {
        res.json({ text: "This is the main page :)" });
    };
    return IndexController;
}());
exports.IndexController = IndexController;
