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
const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  console.log(errors);
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <S.FormWrapper>
      <S.Form onSubmit={(e) => e.preventDefault()}>
        <div>
          <h4>Create your account</h4>
          <input placeholder="Username" {...register('userName')} />
          <S.Error>{errors.userName && errors.userName.message}</S.Error>
          <input placeholder="Email" {...register('email')} />
          <S.Error>{errors.email && errors.email.message}</S.Error>
          <input placeholder="Password" {...register('password')} />
          <S.Error>{errors.password && errors.password.message}</S.Error>
          <input
            placeholder="Confirm Password"
            {...register('confirmPassword')}
          />
          <S.Error>
            {errors.confirmPassword && errors.confirmPassword.message}
          </S.Error>

          <button type="submit" onClick={onSubmit}>
            Register
          </button>
        </div>
      </S.Form>
    </S.FormWrapper>
  );
};

export default RegisterForm;
