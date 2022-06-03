import styled from 'styled-components';

export const TweetWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid white;
  height: 200px;
`;
export const TweetForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
export const TweetAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 100%;
  background-color: darkblue;
`;
export const TweetInput = styled.input`
  color: white;
  height: 50px;
  width: 100%;
  border: none;
  background-color: darkblue;
  outline: none;
  &:placeholder-shown {
    font-size: 18px;
  }
`;
