import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schemas';

import * as S from './styles';
import { NewUserInterface } from 'store/Auth/authTypes';

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewUserInterface>({
    resolver: yupResolver(schema),
  });

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
          <input
            type="password"
            placeholder="Password"
            {...register('password')}
          />
          <S.Error>{errors.password && errors.password.message}</S.Error>
          <input
            type="password"
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
