import { Router } from "express";
import controller from "./pets.controller.js";

const router = Router();

router.get("/", controller.getAll);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);
router.get("/:id", controller.getById);
router.post("/bulk", controller.insertMany);

export default router;
