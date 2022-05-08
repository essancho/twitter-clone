import React from 'react';
import {
  StyledTweetAvatar,
  StyledTweetForm,
  StyledTweetInput,
  StyledTweetWrapper,
} from './Styles/addTweetStyles';

type Props = {};

const AddTweet = (props: Props) => {
  return (
    <StyledTweetWrapper>
      <StyledTweetAvatar>A</StyledTweetAvatar>
      <StyledTweetForm>
        <StyledTweetInput type="text" placeholder="What's happening?" />
      </StyledTweetForm>
    </StyledTweetWrapper>
  );
};

export default AddTweet;
