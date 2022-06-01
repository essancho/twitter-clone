import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../modules/Navbar';
import SidebarLeft from '../modules/SidebarLeft';
import SidebarRight from '../modules/SidebarRight';
import {
  BookmarksPage,
  ExplorePage,
  FrontPage,
  ListPage,
  MainPage,
  MessagesPage,
  NotificationsPage,
  ProfilePage,
} from '../pages';
import {
  Container,
  Layout,
  StyledInnerContainer,
  StyledLeft,
  StyledMain,
  StyledRight,
} from '../styles/global';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
      </Routes>
      <Container>
        <Layout>
          <StyledLeft>
            <SidebarLeft />
          </StyledLeft>
          <StyledMain>
            <StyledInnerContainer>
              <Navbar />
              <Routes>
                <Route path="/home" element={<MainPage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/messages" element={<MessagesPage />} />
                <Route path="/bookmarks" element={<BookmarksPage />} />
                <Route path="/lists" element={<ListPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/notifications" element={<NotificationsPage />} />
              </Routes>
            </StyledInnerContainer>
          </StyledMain>
          <StyledRight>
            <StyledInnerContainer>
              <SidebarRight />
            </StyledInnerContainer>
          </StyledRight>
        </Layout>
      </Container>
    </BrowserRouter>
  );
};

export default Navigation;
