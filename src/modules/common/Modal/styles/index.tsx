import styled from 'styled-components';
import Modal from 'styled-react-modal';

export const StyledModal = styled(Modal)``;

export const StyledModalInner = styled.div`
  position: relative;
  width: 640px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
  border-radius: 10px;
`;
