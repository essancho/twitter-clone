import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 20px;
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
    display: flex;
    flex-direction: column;
    width: 80%;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 6px;
`;
