import service from "./pets.service.js";

class PetsController {
  getAll = async (req, res) => {
    try {
      const result = await service.getAll(req.query);
      if (!result || result.length === 0) return res.status(404).json({ message: "No se encontraron mascotas" });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener mascotas", error: error.message });
    }
  };

  getById = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await service.getById(id);
      if (!result) return res.status(404).json({ message: "Mascota no encontrada" });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener mascota", error: error.message });
    }
  };

  create = async (req, res) => {
    try {
      const data = req.body;
      const result = await service.create(data);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: "Error al crear mascota", error: error.message });
    }
  };

  insertMany = async (req, res) => {
    try {
      const data = req.body;
      const result = await service.insertMany(data);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: "Error al insertar mascotas", error: error.message });
    }
  };

  update = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const result = await service.update(id, data);
      if (!result) return res.status(404).json({ message: "Mascota no encontrada" });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar mascota", error: error.message });
    }
  };

  delete = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await service.delete(id);
      if (!result) return res.status(404).json({ message: "Mascota no encontrada" });
      res.status(200).json({ message: "Mascota eliminada exitosamente" });
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar mascota", error: error.message });
    }
  };
}

export default new PetsController();
