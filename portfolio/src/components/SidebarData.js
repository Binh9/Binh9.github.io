import React from 'react';
import * as SiIcons from 'react-icons/si';
import * as MdIcons from 'react-icons/md';
import * as VscIcons from 'react-icons/vsc';
import * as AiFillIcons from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'About Me',
    path: '/aboutme',
    icon: <SiIcons.SiAboutDotMe />,
    cname: 'nav-text'
  },
  {
    title: 'Experience',
    path: '/experience',
    icon: <MdIcons.MdWork />,
    cname: 'nav-text'
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <VscIcons.VscProject />,
    cname: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <AiFillIcons.AiFillContacts />,
    cname: 'nav-text'
  }
]
