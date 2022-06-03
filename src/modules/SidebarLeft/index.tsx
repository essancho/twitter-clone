import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { TwitterLogo } from 'phosphor-react';

import { SIDEBAR_LINKS } from './data';
import SidebarItem from './SidebarItem';

import { StyledTop } from '../../styles/global';
import * as S from './styles';

const SidebarLeft: FC = () => {
  return (
    <S.Sider>
      <StyledTop>
        <Link to="/home">
          <TwitterLogo size={38} weight="fill" style={{ marginLeft: 15 }} />
        </Link>
      </StyledTop>
      {SIDEBAR_LINKS.map(({ name, path, Icon, id }) => (
        <SidebarItem key={id} name={name} path={path} Icon={Icon} id={id} />
      ))}
    </S.Sider>
  );
};

export default SidebarLeft;
