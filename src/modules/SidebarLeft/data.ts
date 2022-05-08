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

export interface LinkInterface {
  id: number;
  name: string;
  path: string;
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}
export const SIDEBAR_LINKS: Array<LinkInterface> = [
  {
    id: 1,
    name: 'Home',
    path: '/home',
    Icon: House,
  },
  {
    id: 2,
    name: 'Explore',
    path: '/explore',
    Icon: Hash,
  },
  {
    id: 3,
    name: 'Notifications',
    path: '/notifications',
    Icon: Bell,
  },
  {
    id: 4,
    name: 'Messages',
    path: '/messages',
    Icon: ChatCenteredDots,
  },
  {
    id: 5,
    name: 'Bookmarks',
    path: '/bookmarks',
    Icon: BookmarksSimple,
  },
  {
    id: 6,
    name: 'Lists',
    path: '/lists',
    Icon: List,
  },
  {
    id: 7,
    name: 'Profile',
    path: '/profile',
    Icon: User,
  },
];
