import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IFormInputs {
  userName: string;
  email: string;
  password: string;
}

const schema = yup
  .object({
    userName: yup.string().min(8).max(32).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  })
  .required();
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInputs) => console.log(data);
  return (
    <form>
      <input {...register('userName')} />

      <input {...register('password')} />
    </form>
  );
};

export default RegisterForm;
