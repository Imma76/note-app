import mongoose from 'mongoose';

const userSchema = mongoose.Schema({

  email: {

    type: String,

    required: true,

    unique: true

  },

  password: {

    type: String,
    required: true

  }

}, { timestamps: true });

const userModel = mongoose.model('users', userSchema);

export default userModel;
