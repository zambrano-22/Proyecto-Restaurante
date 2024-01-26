"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
//framework express
const app = (0, express_1.default)();
//middleware
app.use((0, cors_1.default)({ origin: '*' }));
app.use(express_1.default.json());
exports.default = app;
