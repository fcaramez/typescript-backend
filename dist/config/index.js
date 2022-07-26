"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const consts_1 = __importDefault(require("../utils/consts"));
module.exports = (app) => {
    app.set("trust proxy", 1);
    app.use((0, cors_1.default)({
        credentials: true,
        origin: process.env.ORIGIN || "http://localhost:3000",
    }));
    app.use((0, morgan_1.default)("dev"));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use((0, cookie_parser_1.default)());
    app.use((0, express_session_1.default)({
        secret: process.env.SESSION_SECRET || "super secret key",
        resave: false,
        saveUninitialized: false,
        store: connect_mongo_1.default.create({
            mongoUrl: consts_1.default,
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365,
            sameSite: "none",
            secure: process.env.NODE_ENV === "production",
        },
    }));
    app.use((req, res, next) => {
        req.user = req.session.user || null;
        next();
    });
};
