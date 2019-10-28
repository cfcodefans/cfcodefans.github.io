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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var fs_1 = require("fs");
var _ = require("lodash");
var _p = require("path");
var commons_1 = require("./commons");
var _mdx = require("@mdx-js/mdx");
function pathInfo(path) {
    return __awaiter(this, void 0, void 0, function () {
        var fstats;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs_1.promises.stat("" + _p.resolve(path))];
                case 1:
                    fstats = _a.sent();
                    return [2 /*return*/, Promise.resolve({ isFile: fstats.isFile(), path: path })];
            }
        });
    });
}
function ls(path) {
    return __awaiter(this, void 0, void 0, function () {
        var ds;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs_1.promises.readdir(path, { withFileTypes: true })];
                case 1:
                    ds = _a.sent();
                    return [2 /*return*/, Promise.resolve(ds.map(function (d) { return ({ isFile: d.isFile(), path: _p.resolve(path, d.name) }); }))];
            }
        });
    });
}
function walk(rootPath, visitor) {
    return __awaiter(this, void 0, void 0, function () {
        var list, pathStack, currentPath, subPaths, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    list = [];
                    return [4 /*yield*/, pathInfo(rootPath)];
                case 1:
                    pathStack = [_b.sent()];
                    _b.label = 2;
                case 2:
                    if (!(pathStack.length != 0)) return [3 /*break*/, 7];
                    currentPath = pathStack.pop();
                    return [4 /*yield*/, ls(currentPath.path)];
                case 3:
                    subPaths = _b.sent();
                    if (!visitor) return [3 /*break*/, 5];
                    return [4 /*yield*/, visitor(currentPath, subPaths)];
                case 4:
                    _a = _b.sent();
                    return [3 /*break*/, 6];
                case 5:
                    _a = subPaths;
                    _b.label = 6;
                case 6:
                    subPaths = _a;
                    list.push.apply(list, subPaths);
                    pathStack.push.apply(pathStack, subPaths.filter(function (pi) { return !pi.isFile; }));
                    return [3 /*break*/, 2];
                case 7: return [2 /*return*/, Promise.resolve(list)];
            }
        });
    });
}
var DEFAULT_OPTIONS = {
    footnotes: true,
    remarkPlugins: [],
    rehypePlugins: [],
    compilers: []
};
var compiler = _mdx.createMdxAstCompiler(DEFAULT_OPTIONS);
function loadMeta(mdxNode) {
    var children = mdxNode["children"];
    if (_.isEmpty(children))
        return {};
    var exportNode = children.find(function (child) { return child.type === "export" && (child["value"] || "").indexOf("meta") >= 0; });
    if (_.isEmpty(exportNode))
        return {};
    var exportStr = exportNode["value"];
    var content = exportStr.match(/\{.*\}/)[0];
    return JSON.parse(content);
}
function getMDXMeta(mdxStr) {
    var mdxContent = compiler.parse(mdxStr);
    return loadMeta(mdxContent);
}
function LOAD_ROUTES(_path, basePath) {
    return __awaiter(this, void 0, void 0, function () {
        var pathAndRoutes, rootPathInfo, _a, _b, _c;
        var _this = this;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    pathAndRoutes = new Map();
                    return [4 /*yield*/, pathInfo(_path)];
                case 1:
                    rootPathInfo = _d.sent();
                    _b = (_a = pathAndRoutes).set;
                    _c = [_path];
                    return [4 /*yield*/, pathToRouteModal(rootPathInfo, basePath)];
                case 2:
                    _b.apply(_a, _c.concat([_d.sent()]));
                    return [4 /*yield*/, walk(_path, function (currentPath, pis) { return __awaiter(_this, void 0, void 0, function () {
                            var parentRoute, _i, pis_1, pi, route;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        parentRoute = pathAndRoutes.get(currentPath.path);
                                        _i = 0, pis_1 = pis;
                                        _a.label = 1;
                                    case 1:
                                        if (!(_i < pis_1.length)) return [3 /*break*/, 4];
                                        pi = pis_1[_i];
                                        return [4 /*yield*/, pathToRouteModal(pi, basePath)];
                                    case 2:
                                        route = _a.sent();
                                        pathAndRoutes.set(pi.path, route);
                                        parentRoute.children && parentRoute.children.push(route);
                                        parentRoute.data && parentRoute.data.push(route);
                                        _a.label = 3;
                                    case 3:
                                        _i++;
                                        return [3 /*break*/, 1];
                                    case 4: return [2 /*return*/, pis];
                                }
                            });
                        }); })];
                case 3:
                    _d.sent();
                    return [2 /*return*/, [pathAndRoutes.get(_path)]];
            }
        });
    });
}
function pathToRouteModal(pi, basePath) {
    return __awaiter(this, void 0, void 0, function () {
        var _path, path, template, children, data, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _path = _p.relative(basePath, pi.path).replace(/\\/g, "/");
                    path = "/" + _p.basename(_path);
                    template = pi.isFile ? _p.resolve(basePath, _path) : "src/pages/blog_list";
                    children = pi.isFile ? null : [];
                    data = [];
                    if (!(pi.isFile && _p.extname(pi.path) == '.mdx')) return [3 /*break*/, 2];
                    _a = getMDXMeta;
                    return [4 /*yield*/, fs_1.promises.readFile(pi.path, "utf-8")];
                case 1:
                    data = _a.apply(void 0, [_b.sent()]);
                    _b.label = 2;
                case 2: return [2 /*return*/, {
                        path: path,
                        _path: _path,
                        template: template,
                        children: children,
                        // data,
                        getData: function () { return data; }
                    }];
            }
        });
    });
}
function routeToMenuItem(route) {
    return {
        label: _p.basename(route._path),
        link: route._path,
        children: [],
        icon: _p.basename(route.path),
        layer: route._path.split("/").indexOf(route.path.replace("/", ""))
    };
}
function TO_MENUS(routes) {
    return __awaiter(this, void 0, void 0, function () {
        var routeStack, linkAndMenuItems, currentRoute, menuItemModal, routeChildren, subDirs;
        var _a;
        return __generator(this, function (_b) {
            if (!(routes && routes.length > 0))
                return [2 /*return*/, []];
            routeStack = __spreadArrays(routes);
            linkAndMenuItems = new Map();
            routes.map(function (r) { return routeToMenuItem(r); }).forEach(function (m) { return linkAndMenuItems.set(m.link, m); });
            while (routeStack.length != 0) {
                currentRoute = routeStack.pop();
                menuItemModal = linkAndMenuItems.get(currentRoute._path);
                routeChildren = currentRoute.children;
                subDirs = routeChildren.filter(function (r) { return !_.isEmpty(r.children); });
                (_a = menuItemModal.children).push.apply(_a, subDirs.map(function (r) { return routeToMenuItem(r); })
                    .sort(function (m1, m2) { return commons_1.compare(m1.label, m2.label); }));
                menuItemModal.children.forEach(function (subMenuItem) { return linkAndMenuItems.set(subMenuItem.link, subMenuItem); });
                routeStack.push.apply(routeStack, subDirs);
            }
            return [2 /*return*/, Promise.resolve(routes.map(function (r) { return linkAndMenuItems.get(r._path); })
                    .sort(function (m1, m2) { return commons_1.compare(m1.label, m2.label); }))];
        });
    });
}
function LOAD_MENUS(routes) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, TO_MENUS(routes)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.LOAD_ROUTES = LOAD_ROUTES;
exports.LOAD_MENUS = LOAD_MENUS;
