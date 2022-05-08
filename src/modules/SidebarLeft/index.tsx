import React, { FC } from 'react';
import { SIDEBAR_LINKS } from './data';
import SidebarItem from './SidebarItem';

const SidebarLeft: FC = () => {
  return (
    <div>
      {SIDEBAR_LINKS.map((item) => (
        <SidebarItem name={item.name} path={item.path} Icon={item.Icon} />
      ))}
    </div>
  );
};

export default SidebarLeft;
