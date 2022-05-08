import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface TextInterface {
  readonly active: boolean;
}

export const StyledSider = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 22px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  height: 40px;
  display: flex;
  align-items: center;
  margin: 10px 0;
  width: 240px;
  padding: 15px;
  &:hover {
    background-color: #575b5f;
    border-radius: 20px;
  }
`;

export const StyledLinkText = styled.span<TextInterface>`
  padding-left: 15px;
  font-weight: ${(props) => (props.active ? 800 : 400)};
`;
