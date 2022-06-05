import React from 'react';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';
import * as S from './styles';

interface Props {
  open: boolean;
  handleCloseModal: () => void;
  type: string;
}
const AuthModal: React.FC<Props> = ({ open, handleCloseModal, type }) => {
  return (
    <S.StyledModal
      onBackgroundClick={handleCloseModal}
      onEscapeKeydown={handleCloseModal}
      isOpen={open}
    >
      {type === 'login' ? <LoginForm /> : <RegisterForm />}
    </S.StyledModal>
  );
};

export default AuthModal;
