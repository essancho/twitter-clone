import React from 'react';
import { Link } from 'react-router-dom';
import { LinkInterface } from './data';

const SidebarItem = ({ name, Icon, path }: LinkInterface) => {
  return (
    <Link to={path}>
      <Icon />
      <span>{name}</span>
    </Link>
  );
};

export default SidebarItem;
