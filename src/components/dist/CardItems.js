"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.__esModule = true;
var react_1 = require("react");
var CardItem_1 = require("./CardItem");
var Grid_1 = require("@mui/material/Grid");
var styles_1 = require("@material-ui/core/styles");
var CardItems = function () {
    var useStyles = styles_1.makeStyles(function (theme) {
        var _a;
        return ({
            profileSection: (_a = {},
                _a[theme.breakpoints.up('xs')] = {
                    justifyContent: 'space-between'
                },
                _a[theme.breakpoints.up('lg')] = {
                    justifyContent: 'unset'
                },
                _a[theme.breakpoints.down('xs')] = {
                    justifyContent: 'center'
                },
                _a)
        });
    });
    var classes = useStyles();
    var _a = react_1.useState([]), userList = _a[0], setUserList = _a[1];
    var userData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://jsonplaceholder.typicode.com/users')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    }); };
    react_1.useEffect(function () {
        userData().then(function (data) {
            setUserList(data);
        });
    }, []);
    react_1.useEffect(function () {
        setUserList(function (userList) {
            return userList.map(function (item) { return __assign(__assign({}, item), { favour: false }); });
        });
    }, []);
    var deleteUserItem = function (id) {
        setUserList(function (userList) { return userList.filter(function (item) { return item.id !== id; }); });
    };
    var handleFavour = function (id, favour) {
        setUserList(function (userList) {
            return userList.map(function (item) {
                if (item.id === id) {
                    return __assign(__assign({}, item), { favour: favour });
                }
                return item;
            });
        });
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Grid_1["default"], { container: true, direction: "row", className: classes.profileSection }, userList.map(function (item, index) {
            return react_1["default"].createElement(CardItem_1["default"], { key: index, id: item.id, favour: item.favour, name: item.name, email: item.email, phone: item.phone, website: item.website, deleteItem: deleteUserItem, handleFavour: handleFavour });
        }))));
};
exports["default"] = CardItems;
