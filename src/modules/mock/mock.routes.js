import { Router } from "express";
import { generateMockPets, generateMockUsers, generateMockData } from "./mock.utils.js";

const router = Router();

router.get("/mockingpets/:quantity", async (req, res) => {
  try {
    const quantity = parseInt(req.params.quantity) || 10;
    const pets = await generateMockPets(quantity);
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: "Error al generar mock pets" });
  }
});

router.get("/mockingusers/:quantity", async (req, res) => {
  try {
    const quantity = parseInt(req.params.quantity) || 10;
    const users = await generateMockUsers(quantity);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error al generar mock users" });
  }
});
 
router.post("/generateData", async (req, res) => {
  try {
    const { pets, users } = req.body;
    const result = await generateMockData(users, pets);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message || "Error al generar mock data" });
  }
});

export default router;
