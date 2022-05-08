import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { TwitterLogo } from 'phosphor-react';

import { SIDEBAR_LINKS } from './data';
import SidebarItem from './SidebarItem';

import { StyledTop } from '../../Styles/global';
import { StyledSider } from './Styles/siderLeft';

const SidebarLeft: FC = () => {
  return (
    <StyledSider>
      <StyledTop>
        <Link to="/home">
          <TwitterLogo size={38} weight="fill" style={{ marginLeft: 15 }} />
        </Link>
      </StyledTop>
      {SIDEBAR_LINKS.map(({ name, path, Icon, id }) => (
        <SidebarItem key={id} name={name} path={path} Icon={Icon} id={id} />
      ))}
    </StyledSider>
  );
};

export default SidebarLeft;
