"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const port = 4000;
index_1.default.listen(port, () => {
    console.log(`Se ha iniciado la apliacion node en el puerto ${port}`);
});
