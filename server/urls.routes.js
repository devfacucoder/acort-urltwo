import { Router } from "express";
const urlRoutes = Router();
import urlCtrl from "./url.ctrl.js";


urlRoutes.post("/sendurl",urlCtrl.sendUrl)
urlRoutes.get("/:id",urlCtrl.usarUrl)
export default urlRoutes;