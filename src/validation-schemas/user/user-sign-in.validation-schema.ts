import Joi from 'joi';

const userSignIn = Joi.object({
  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().trim().required(),
});

export { userSignIn };
