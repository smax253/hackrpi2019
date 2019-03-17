const Joi = require('joi');
const User = require('../models/user.model');

const userSchema = Joi.object({
  displayName: Joi.string().required(),
  snapId: Joi.string().required(),
})


module.exports = {
  insert
}

async function insert(user) {
  user = await Joi.validate(user, userSchema, { abortEarly: false });
  return await new User(user).save();
}
