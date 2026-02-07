import { Router } from "express";
import mockRoutes from "../modules/mock/mock.routes.js";
import userRoutes from "../modules/users/users.routes.js";
import petRoutes from "../modules/pets/pets.routes.js";

const router = Router();
router.use("/mocks", mockRoutes);
router.use("/pets", petRoutes);
router.use("/users", userRoutes);
export default router;