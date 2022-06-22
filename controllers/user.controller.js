/* eslint-disable class-methods-use-this */
import _ from 'lodash';
import jwt from 'jsonwebtoken';
import userController from '../services/user.service.js';

class UserController {
  async createUser(req, res) {
    await userController.createUser(req.body);

    return res.status(201).send({ success: true, body: 'user created successfully' });
  }

  async loginUser(req, res) {
    const user = await userController.loginUser(req.body);
    if (_.isEmpty(user)) {
      return res.status(404).send({ success: false, body: 'user does not exist' });
    }
    const token = jwt.sign({ user }, process.env.API_SECRET);
    return res.status(200).send({
      success: true,
      body: {
        message: 'user logged in successfully',
        data: { email: user.email, token }
      }
    });
  }
}

export default new UserController();
