"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18next_1 = __importStar(require("i18next"));
const en = __importStar(require("./locales/en.json"));
const ja = __importStar(require("./locales/ja.json"));
const th = __importStar(require("./locales/th.json"));
const ur = __importStar(require("./locales/ur.json"));
const zhCn = __importStar(require("./locales/zh-cn.json"));
(0, i18next_1.init)({
    lng: "en",
    fallbackLng: "en", // language to use if translations in user language are not available.
    returnNull: false,
    lowerCaseLng: true,
    debug: process.env.NODE_ENV === "development",
    resources: {
        en: {
            translation: en,
        },
        "zh-cn": {
            translation: zhCn,
        },
        th: {
            translation: th,
        },
        ja: {
            translation: ja,
        },
        ur: {
            translation: ur,
        },
    },
});
exports.default = i18next_1.default;
//# sourceMappingURL=index.js.map