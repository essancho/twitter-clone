import React from 'react';
import { CloseIcon } from './styles';

type Props = {
  onClose: () => void;
};

const CloseButton: React.FC<Props> = ({ onClose }) => {
  return <CloseIcon onClick={onClose} size={36} weight="fill" />;
};

export default CloseButton;
