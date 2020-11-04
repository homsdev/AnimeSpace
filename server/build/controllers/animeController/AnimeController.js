"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimeController = void 0;
var dbConfig_1 = require("../../config/dbConfig");
var uuid_1 = require("uuid");
var AnimeController = /** @class */ (function () {
    function AnimeController() {
    }
    AnimeController.prototype.createAnime = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, first_emision, season, studio, rate, cover, newAnime;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, name = _a.name, first_emision = _a.first_emision, season = _a.season, studio = _a.studio, rate = _a.rate, cover = _a.cover;
                        newAnime = {
                            id: uuid_1.v4(),
                            name: name,
                            first_emision: first_emision,
                            season: season,
                            studio: studio,
                            rate: rate,
                            cover: cover
                        };
                        return [4 /*yield*/, dbConfig_1.pool.query('INSERT INTO general_info set ?', [newAnime], function (error, result) {
                                if (!error)
                                    res.json({ text: "New anime succesfully added" });
                                else
                                    res.status(500).json({ text: "Ups something went wrong :C " + error + " and you send " + req.body });
                            })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AnimeController.prototype.readAnime = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, dbConfig_1.pool.query('SELECT * FROM general_info', function (error, result) {
                            if (result.length > 0)
                                res.json(result);
                            else if (error)
                                res.status(500).json({ text: "Ups something went wrong ERROR " + error });
                            else
                                res.json({ text: 'Your list is empty' });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AnimeController.prototype.updateAnime = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, dbConfig_1.pool.query('UPDATE general_info set ? where id=?', [req.body, id], function (error, result) {
                                if (!error)
                                    res.json({ text: "anime with id:" + id + " was updated" });
                                else
                                    res.status(500).json({ text: "Ups something went wrong ERROR " + error });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AnimeController.prototype.deleteAnime = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, dbConfig_1.pool.query('DELETE FROM general_info where id=?', [id], function (error, result) {
                                if (!error)
                                    res.json({ text: "anime with id:" + id + " was deleted" });
                                else
                                    res.status(500).json({ text: "Ups something went wrong ERROR " + error });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AnimeController.prototype.getOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, dbConfig_1.pool.query('SELECT * FROM general_info where id = ?', [id], function (error, result) {
                                if (result.length > 0)
                                    res.json(result);
                                else if (error)
                                    res.status(500).json({ text: "Ups someting went wrong ERROR" });
                                else {
                                    res.status(404).json("Anime with id:" + id + " does not exists on this database");
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return AnimeController;
}());
exports.AnimeController = AnimeController;
