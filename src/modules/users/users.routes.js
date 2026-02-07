import { Router } from "express";
import Users from "./users.utils.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await Users.getAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message || "Error al obtener usuarios" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await Users.getById(req.params.id);
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message || "Error al obtener usuario" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newUser = await Users.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message || "Error al obtener usuario" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await Users.update(req.params.id, req.body);
    if (!updatedUser) return res.status(404).json({ error: "Usuario no encontrado" });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message || "Error al obtener usuario" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await Users.delete(req.params.id);
    if (!deletedUser) return res.status(404).json({ error: "Usuario no encontrado" });
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: error.message || "Error al obtener usuario" });
  }
});


export default router;
