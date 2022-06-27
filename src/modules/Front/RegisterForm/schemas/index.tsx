import * as yup from 'yup';

export const schema = yup
  .object({
    userName: yup.string().min(4).max(16).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
    confirmPassword: yup
      .string()
      .min(8)
      .max(32)
      .required()
      .oneOf([yup.ref('password')], 'Your passwords need to match'),
  })
  .required();
