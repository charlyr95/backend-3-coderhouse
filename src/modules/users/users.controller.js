class UsersController {

  constructor(service) {
    this.service = service;
  }

  getAll = async (req, res) => {
    try {
      const result = await this.service.getAll(req.query);
      if (!result || result.length === 0) return res.status(404).json({ message: "No se encontraron usuarios" });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener usuarios", error: error.message });
    }
  };

  getById = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await this.service.getById(id);
      if (!result) return res.status(404).json({ message: "Usuario no encontrada" });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener usuario", error: error.message });
    }
  };

  create = async (req, res) => {
    try {
      const data = req.body;
      const result = await this.service.create(data);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: "Error al crear usuario", error: error.message });
    }
  };

  insertMany = async (req, res) => {
    try {
      const data = req.body;
      const result = await this.service.insertMany(data);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: "Error al insertar usuarios", error: error.message });
    }
  };

  update = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const result = await this.service.update(id, data);
      if (!result) return res.status(404).json({ message: "Usuario no encontrada" });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar usuario", error: error.message });
    }
  };

  delete = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await this.service.delete(id);
      if (!result) return res.status(404).json({ message: "Usuario no encontrada" });
      res.status(200).json({ message: "Usuario eliminada exitosamente" });
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar usuario", error: error.message });
    }
  };
}

export default UsersController;