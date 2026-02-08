import model from "./pets.model.js";

class PetsService {

    async getAll(){
      return model.find();
    }
  
    async getById(id){
      if (!id) throw new Error("ID is required");
      return model.findById(id);
    }
  
    async create(pet){
      if (!pet) throw new Error("Pet data is required");
      return model.create(pet);
    }
    
    async insertMany(pets){
      if (!pets || !Array.isArray(pets)) throw new Error("Array of pets data is required");
      return model.insertMany(pets);
    }
  
    async update(id, pet){
      if (!id) throw new Error("ID is required");
      if (!pet) throw new Error("Pet data is required");
      const updatedPet = await model.findByIdAndUpdate(id, pet, { new: true });
      return updatedPet;
    }
  
    async delete(id){
      if (!id) throw new Error("ID is required");
      const deletedPet = await model.findByIdAndDelete(id);
      return deletedPet;
    }
}

export default new PetsService();