"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animeController = exports.indexController = void 0;
var IndexController_1 = require("./indexController/IndexController");
var AnimeController_1 = require("./animeController/AnimeController");
var indexController = new IndexController_1.IndexController();
exports.indexController = indexController;
var animeController = new AnimeController_1.AnimeController();
exports.animeController = animeController;
