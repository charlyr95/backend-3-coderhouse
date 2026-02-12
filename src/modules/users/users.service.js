class UsersService {

  constructor(model) {
    this.model = model;
  }

  async getAll(){
    return this.model.find();
  }

  async getById(id){
    return this.model.findById(id);
  }

  async create(user){
    return this.model.create(user);
  } 

  async insertMany(users){
    return this.model.insertMany(users);
  }

  async update(id, user){
    const updatedUser = await this.model.findByIdAndUpdate(id, user, { new: true });
    return updatedUser;
  }

  async delete(id){
    const deletedUser = await this.model.findByIdAndDelete(id);
    return deletedUser;
  }
}

export default UsersService;