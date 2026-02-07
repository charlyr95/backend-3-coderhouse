import { Router } from "express";
import { generateMockPets, generateMockUsers, generateMockData } from "./mock.utils.js";

const router = Router();

// ----------------- PETS -----------------
router.get("/mockingpets", async (req, res) => {
  try {
    const quantity = 20 // Valor por defecto según a criterio (No se especifica en la actividad)
    const pets = await generateMockPets(quantity);
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: "Error al generar mock pets" });
  }
});

router.get("/mockingpets/:quantity", async (req, res) => {
  try {
    const quantity = parseInt(req.params.quantity) || 10;
    const pets = await generateMockPets(quantity);
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: "Error al generar mock pets" });
  }
});


// ----------------- USERS -----------------
router.get("/mockingusers", async (req, res) => {
  try {
    const quantity = 50 // Según lo solicitado por la actividad
    const users = await generateMockUsers(quantity);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error al generar mock users" });
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


// ----------------- OTHERS -----------------
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
