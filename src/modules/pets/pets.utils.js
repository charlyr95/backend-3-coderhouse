import Model from "./pets.service.js";

class Pets {

  async getAll(){
    return Model.find();
  }

  async getById(id){
    return Model.findById(id);
  }

  async create(pet){
    return Model.create(pet);
  }
  
  async insertMany(pets){
    return Model.insertMany(pets);
  }

  async update(id, pet){
    const updatedPet = await Model.findByIdAndUpdate(id, pet, { new: true });
    return updatedPet;
  }

  async delete(id){
    const deletedPet = await Model.findByIdAndDelete(id);
    return deletedPet;
  }
}

export default new Pets();