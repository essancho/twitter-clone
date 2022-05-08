import React from 'react';
import { useLocation } from 'react-router-dom';
import { LinkInterface } from './data';
import { StyledLink, StyledLinkText } from './Styles/siderLeft';

const SidebarItem = ({ name, Icon, path }: LinkInterface) => {
  const location = useLocation();
  return (
    <StyledLink to={path}>
      <Icon size={30} weight={path === location.pathname ? 'fill' : 'light'} />
      <StyledLinkText active={path === location.pathname}>
        {name}
      </StyledLinkText>
    </StyledLink>
  );
};

export default SidebarItem;
