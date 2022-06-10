import styled from 'styled-components';
interface Props {
  size?: string;
  weight?: number;
}
interface ButtonProps {
  variant: string;
  theme: any;
}
export const FrontRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 50px;
`;

export const FrontText = styled.span`
  font-size: ${(props: Props) => props.size};
  font-weight: ${(props: Props) => props.weight};
  margin: 30px 0;
`;

export const FrontButton = styled.button`
  width: 320px;
  padding: 20px;
  background: none;
  border: 1px solid
    ${(props: ButtonProps) => {
      return props.variant === 'primary'
        ? props.theme.accent
        : props.theme.light;
    }};
  border-radius: 20px;
  color: ${(props: ButtonProps) => {
    return props.variant === 'primary' ? props.theme.accent : props.theme.light;
  }};
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
