import React, { JSXElementConstructor } from 'react';

// Icons
import {
  Bell,
  BookmarksSimple,
  ChatCenteredDots,
  Hash,
  House,
  IconProps,
  List,
  User,
} from 'phosphor-react';

// Pages
import {
  BookmarksPage,
  ExplorePage,
  ListPage,
  MainPage,
  MessagesPage,
  NotificationsPage,
  ProfilePage,
} from '../pages';

export interface LinkInterface {
  id: number;
  name: string;
  path: string;
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  Component?: JSXElementConstructor<any>;
}

export const NAV_ROUTES: Array<LinkInterface> = [
  {
    id: 1,
    name: 'Home',
    path: '/home',
    Icon: House,
    Component: MainPage,
  },
  {
    id: 2,
    name: 'Explore',
    path: '/explore',
    Icon: Hash,
    Component: ExplorePage,
  },
  {
    id: 3,
    name: 'Notifications',
    path: '/notifications',
    Icon: Bell,
    Component: NotificationsPage,
  },
  {
    id: 4,
    name: 'Messages',
    path: '/messages',
    Icon: ChatCenteredDots,
    Component: MessagesPage,
  },
  {
    id: 5,
    name: 'Bookmarks',
    path: '/bookmarks',
    Icon: BookmarksSimple,
    Component: BookmarksPage,
  },
  {
    id: 6,
    name: 'Lists',
    path: '/lists',
    Icon: List,
    Component: ListPage,
  },
  {
    id: 7,
    name: 'Profile',
    path: '/profile',
    Icon: User,
    Component: ProfilePage,
  },
];
