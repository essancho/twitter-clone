import styled from 'styled-components';
interface Props {
  size?: string;
  weight?: number;
}
interface ButtonProps {
  color: string;
}
export const StyledFrontRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 50px;
`;

export const StyledFrontText = styled.span`
  font-size: ${(props: Props) => props.size};
  font-weight: ${(props: Props) => props.weight};
  margin: 30px 0;
`;

export const StyledFrontButton = styled.button`
  width: 320px;
  padding: 20px;
  background: none;
  border: 1px solid ${(props: ButtonProps) => props.color};
  border-radius: 20px;
  color: ${(props: ButtonProps) => props.color};
  font-weight: 700;
  &:hover {
    background-color: #fff;
    color: black;
  }
  &:active {
    background-color: black;
    color: #fff;
  }
`;
