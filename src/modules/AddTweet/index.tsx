import React from 'react';
import * as S from './styles';

type Props = {};

const AddTweet = (props: Props) => {
  return (
    <S.TweetWrapper>
      <S.TweetAvatar>A</S.TweetAvatar>
      <S.TweetForm>
        <S.TweetInput type="text" placeholder="What's happening?" />
      </S.TweetForm>
    </S.TweetWrapper>
  );
};

export default AddTweet;
