import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string',
    'string.empty': 'The username cannot be empty',
    'string.min': 'Username should have at least 3 characters',
    'string.max': 'Username should have at most 20 characters',
    'any.required': 'Username is required',
  }),
  phoneNumber: Joi.number().integer().required().messages({
    'number.base': 'Phone number should be a number',
    'number.min': 'Phone number should have at least 3 characters',
    'number.max': 'Phone number should have at least 20 characters',
    'any.required': 'Phone number is required',
  }),
  email: Joi.string()
    .email()
    .messages({ 'string.base': 'Email should be a string' }),
  isFavourite: Joi.boolean().messages({
    'number.base': 'isFavourite should be a boolean type',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'string.base':
      'Contact type should be a one of "work", "home" or "personal" ',
  }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Username should be a string',
    'string.empty': 'The username cannot be empty',
    'string.min': 'Username should have at least 3 characters',
    'string.max': 'Username should have at most 20 characters',
  }),
  phoneNumber: Joi.number().integer().messages({
    'number.base': 'Phone number should be a number',
    'number.min': 'Phone number should have at least 3 characters',
    'number.max': 'Phone number should have at least 20 characters',
  }),
  email: Joi.string()
    .email()
    .messages({ 'string.base': 'Email should be a string' }),
  isFavourite: Joi.boolean().messages({
    'number.base': 'isFavourite should be a boolean type',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'string.base':
      'Contact type should be a one of "work", "home" or "personal" ',
  }),
});
