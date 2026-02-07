import { Router } from "express";
import Pets from "./pets.utils.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const pets = await Pets.getAll();
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message || "Error al obtener mascotas" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const pet = await Pets.getById(req.params.id);
    if (!pet) return res.status(404).json({ error: "Mascota no encontrada" });
    res.status(200).json(pet);
  } catch (error) {
    res.status(500).json({ error: error.message || "Error al obtener mascota" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newPet = await Pets.create(req.body);
    res.status(201).json(newPet);
  } catch (error) {
    res.status(500).json({ error: error.message || "Error al obtener mascota" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedPet = await Pets.update(req.params.id, req.body);
    if (!updatedPet) return res.status(404).json({ error: "Mascota no encontrada" });
    res.status(200).json(updatedPet);
  } catch (error) {
    res.status(500).json({ error: error.message || "Error al obtener mascota" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedPet = await Pets.delete(req.params.id);
    if (!deletedPet) return res.status(404).json({ error: "Mascota no encontrada" });
    res.status(200).json(deletedPet);
  } catch (error) {
    res.status(500).json({ error: error.message || "Error al obtener mascota" });
  }
});

export default router;
