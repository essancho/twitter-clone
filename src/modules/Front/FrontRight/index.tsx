import React, { useState } from 'react';
import Modal from 'modules/common/Modal';

import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';

import * as S from './styles';

type Props = {};

const FrontRight = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [type, setType] = useState<string>('login');
  const handleModal = (authType: string): void => {
    setOpen(!open);
    setType(authType);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <S.FrontRight>
      <S.FrontText size="62px" weight={700}>
        FOLLOW YOUR INTERESTS
      </S.FrontText>
      <S.FrontText size="42px">JOIN TWITTER RIGHT NOW</S.FrontText>
      <div
        style={{
          display: 'flex',
          margin: '30px 0',
          justifyContent: 'space-between',
        }}
      >
        <S.FrontButton
          onClick={() => handleModal('register')}
          variant="primary"
        >
          Register
        </S.FrontButton>
        <S.FrontButton onClick={() => handleModal('login')} variant="secondary">
          Login
        </S.FrontButton>
      </div>
      <Modal open={open} onClose={handleCloseModal}>
        {type === 'login' ? <LoginForm /> : <RegisterForm />}
      </Modal>
    </S.FrontRight>
  );
};

export default FrontRight;
