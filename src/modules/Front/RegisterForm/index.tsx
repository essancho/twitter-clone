import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './styles';
interface IFormInputs {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup
  .object({
    userName: yup.string().min(8).max(32).required(),
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
    <S.FormWrapper>
      <S.Form>
        <div>
          <h4>Create your account</h4>
          <input placeholder="Username" {...register('userName')} />
          <input placeholder="Email" {...register('email')} />
          <input placeholder="Password" {...register('password')} />
          <input
            placeholder="Confirm Password"
            {...register('confirmPassword')}
          />
        </div>
      </S.Form>
    </S.FormWrapper>
  );
};

export default RegisterForm;
