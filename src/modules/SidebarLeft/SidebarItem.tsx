import React from 'react';
import { useLocation } from 'react-router-dom';
import { LinkInterface } from '../../navigation/routes';
import * as S from './styles';

const SidebarItem = ({ name, Icon, path }: LinkInterface) => {
  const location = useLocation();
  return (
    <S.SLink to={path}>
      <Icon size={30} weight={path === location.pathname ? 'fill' : 'light'} />
      <S.LinkText active={path === location.pathname}>{name}</S.LinkText>
    </S.SLink>
  );
};

export default SidebarItem;
