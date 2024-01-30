"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const routes_1 = __importDefault(require("./routes"));
const errorsHandlers_1 = require("./middlewares/errorsHandlers");
dotenv_1.default.config();
const prisma = new client_1.PrismaClient();
//framework express
const app = (0, express_1.default)();
//middleware
app.use((0, cors_1.default)({ origin: '*' }));
app.use(express_1.default.json());
app.use('/api', routes_1.default); // http:localhost:4000/api
app.use(errorsHandlers_1.notFoundHandler);
exports.default = app;
