/* eslint-disable class-methods-use-this */
import userModel from '../models/user.model.js';

class UserService {
  async createUser(data) {
    const newUser = await userModel.create(data);
    return newUser;
  }
}
