"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = require("../../common/middlewares");
const category_controller_1 = require("./category.controller");
const router = (0, express_1.Router)();
router.post("/", middlewares_1.authorization.authorize, category_controller_1.createCategoryController);
router.patch("/", middlewares_1.authorization.authorize, category_controller_1.updateCategoryController);
router.get("/", category_controller_1.fetchCategoriesController);
router.get("/", category_controller_1.fetchCategoryController);
router.delete("/", middlewares_1.authorization.authorize, category_controller_1.deleteCategoryController);
exports.default = router;