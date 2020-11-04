"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animeRouter = exports.indexRouter = void 0;
var IndexRoute_1 = require("./index/IndexRoute");
var AnimeRoute_1 = require("./animeRoutes/AnimeRoute");
var indexRouter = new IndexRoute_1.IndexRoute().router;
exports.indexRouter = indexRouter;
var animeRouter = new AnimeRoute_1.AnimeRoutes().router;
exports.animeRouter = animeRouter;
