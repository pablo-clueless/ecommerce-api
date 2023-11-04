"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = __importDefault(require("http"));
const config_1 = require("./common/config");
const server_1 = __importDefault(require("./server"));
dotenv_1.default.config();
const app = (0, server_1.default)();
const server = http_1.default.createServer(app);
mongoose_1.default.connect(config_1.KEYS.mongo_uri);
mongoose_1.default.set("strictQuery", false);
const db = mongoose_1.default.connection;
db.once("open", () => console.log("Connected to MongoDB"));
db.on("error", console.error.bind(console, "connection error: "));
const port = process.env.PORT || config_1.KEYS.port;
server.listen(port, () => console.log(`App is running on port ${port}`));