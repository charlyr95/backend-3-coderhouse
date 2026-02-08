import Model from "./pets.service.js";

class PetsService {

    async getAll(){
      return Model.find();
    }
  
    async getById(id){
      if (!id) throw new Error("ID is required");
      return Model.findById(id);
    }
  
    async create(pet){
      if (!pet) throw new Error("Pet data is required");
      return Model.create(pet);
    }
    
    async insertMany(pets){
      if (!pets || !Array.isArray(pets)) throw new Error("Array of pets data is required");
      return Model.insertMany(pets);
    }
  
    async update(id, pet){
      if (!id) throw new Error("ID is required");
      if (!pet) throw new Error("Pet data is required");
      const updatedPet = await Model.findByIdAndUpdate(id, pet, { new: true });
      return updatedPet;
    }
  
    async delete(id){
      if (!id) throw new Error("ID is required");
      const deletedPet = await Model.findByIdAndDelete(id);
      return deletedPet;
    }
}

export default new PetsService();