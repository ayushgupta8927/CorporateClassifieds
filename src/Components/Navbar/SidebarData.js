import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Add Offers',
    path: '/add',
    icon: <IoIcons.IoIosAdd />,
    cName: 'nav-text'
  },
  {
    title: 'My Offers',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/login',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Liked Product',
    path: '/ShowProductByLike',
    icon: <AiIcons.AiOutlineUserAdd />,
    cName: 'nav-text'
  },
  
];