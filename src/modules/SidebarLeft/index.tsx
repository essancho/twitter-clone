import React from 'react';
// Packages
import { Link } from 'react-router-dom';
import { TwitterLogo } from 'phosphor-react';

import SidebarItem from './SidebarItem';
// Navigation
import { LinkInterface } from '../../navigation/routes';
// Styles
import { StyledTop } from '../../styles/global';
import * as S from './styles';

interface Props {
  NAV_ROUTES: Array<LinkInterface>;
}
const SidebarLeft: React.FC<Props> = ({ NAV_ROUTES }) => {
  return (
    <S.Sider>
      <StyledTop>
        <Link to="/home">
          <TwitterLogo size={38} weight="fill" style={{ marginLeft: 15 }} />
        </Link>
      </StyledTop>
      {NAV_ROUTES.map(({ name, path, Icon, id }) => (
        <SidebarItem key={id} name={name} path={path} Icon={Icon} id={id} />
      ))}
    </S.Sider>
  );
};

export default SidebarLeft;
