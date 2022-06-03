import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { StyledTop } from '../../styles/global';
import * as S from './styles';

type Props = {};

const Navbar = (props: Props) => {
  const [title, setTitle] = useState<string>('');
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case '/home':
        setTitle('Latest Tweets');
        break;
      case '/profile':
        setTitle('Profile');
        break;
      case '/bookmarks':
        setTitle('Bookmarks');
        break;
      case '/explore':
        setTitle('Explore');
        break;
      case '/messages':
        setTitle('Messages');
        break;
      case '/notifications':
        setTitle('Notifications');
        break;
      case '/lists':
        setTitle('Lists');
        break;
      default:
        setTitle('Latest Tweets');
    }
  }, [location]);

  return (
    <>
      <StyledTop>
        <S.Navbar>{title}</S.Navbar>
      </StyledTop>
    </>
  );
};

export default Navbar;
