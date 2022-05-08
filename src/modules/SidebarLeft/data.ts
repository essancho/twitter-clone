import {
  BookmarksSimple,
  ChatCenteredDots,
  DotsThreeCircle,
  Hash,
  House,
  IconProps,
  List,
  Notification,
  User,
} from 'phosphor-react';

export interface LinkInterface {
  name: string;
  path: string;
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}
export const SIDEBAR_LINKS: Array<LinkInterface> = [
  {
    name: 'Home',
    path: '/home',
    Icon: House,
  },
  {
    name: 'Explore',
    path: '/explore',
    Icon: Hash,
  },
  {
    name: 'Notifications',
    path: '/notifications',
    Icon: Notification,
  },
  {
    name: 'Messages',
    path: '/messages',
    Icon: ChatCenteredDots,
  },
  {
    name: 'Bookmarks',
    path: '/bookmarks',
    Icon: BookmarksSimple,
  },
  {
    name: 'Lists',
    path: '/lists',
    Icon: List,
  },
  {
    name: 'Profile',
    path: '/profile',
    Icon: User,
  },
  {
    name: 'More',
    path: '/more',
    Icon: DotsThreeCircle,
  },
];
