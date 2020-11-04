"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimeRoutes = void 0;
var express_1 = require("express");
// Controller
var controllerIndex_1 = require("../../controllers/controllerIndex");
var AnimeRoutes = /** @class */ (function () {
    function AnimeRoutes() {
        this.router = express_1.Router();
        this.initRoutes();
    }
    AnimeRoutes.prototype.initRoutes = function () {
        this.router.get('/', controllerIndex_1.animeController.readAnime);
        this.router.post('/', controllerIndex_1.animeController.createAnime);
        this.router.put('/:id', controllerIndex_1.animeController.updateAnime);
        this.router.delete('/:id', controllerIndex_1.animeController.deleteAnime);
        this.router.get('/:id', controllerIndex_1.animeController.getOne);
    };
    return AnimeRoutes;
}());
exports.AnimeRoutes = AnimeRoutes;
