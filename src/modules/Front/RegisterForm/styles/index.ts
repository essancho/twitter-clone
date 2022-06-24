import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;

  input {
    height: 50px;
    margin: 10px 0;
    color: ${(p) => p.theme.light};
    background: none;
    font-size: 18px;
    border: 1px solid ${(p) => p.theme.light};
    outline: none;
    border-radius: 3px;
    padding: 0 7px;
  }
  div {
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    width: 80%;
  }
  button {
    height: 50px;
    margin: 10px 0;
    border: 1px solid ${(p) => p.theme.accent};
    color: ${(p) => p.theme.accent};
    background: none;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  border-radius: 6px;
`;

export const Error = styled.span`
  color: ${(p) => p.theme.danger};
`;
