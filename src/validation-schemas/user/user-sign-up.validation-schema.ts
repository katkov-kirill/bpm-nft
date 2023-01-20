import Joi from 'joi';

const userSignUp = Joi.object({
  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().trim().min(6).max(30).required(),
});

export { userSignUp };
