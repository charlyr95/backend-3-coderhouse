import Model from "./users.model.js";

class Users {

  async getAll(){
    return Model.find();
  }

  async getById(id){
    return Model.findById(id);
  }

  async create(user){
    return Model.create(user);
  } 

  async insertMany(users){
    return Model.insertMany(users);
  }

  async update(id, user){
    const updatedUser = await Model.findByIdAndUpdate(id, user, { new: true });
    return updatedUser;
  }
}

export default new Users();