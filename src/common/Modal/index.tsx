import CloseButton from 'common/CloseButton';
import React from 'react';

import * as S from './styles';

interface Props {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ open, onClose, children }) => {
  return (
    <S.StyledModal
      onBackgroundClick={onClose}
      onEscapeKeydown={onClose}
      isOpen={open}
    >
      <S.StyledModalInner>
        <CloseButton onClose={onClose} />
        {children}
      </S.StyledModalInner>
    </S.StyledModal>
  );
};

export default Modal;
