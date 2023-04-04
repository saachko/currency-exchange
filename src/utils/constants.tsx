import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';

import { Contact, NavLink } from 'ts/interfaces';

const navLinks: NavLink[] = [
  {
    id: 'converter',
    name: 'Конвертер',
    path: '/converter',
  },
  {
    id: 'currency',
    name: 'Курсы валют',
    path: '/currency',
  },
];

const authorsContacts: Contact[] = [
  {
    id: '1',
    link: 'https://github.com/saachko',
    icon: <AiFillGithub />,
    title: 'Anastasiya on GitHub',
  },
  {
    id: '2',
    link: 'https://t.me/saachko',
    icon: <FaTelegramPlane />,
    title: 'Send a message',
  },
  {
    id: '3',
    link: 'https://www.linkedin.com/in/saachko/',
    icon: <AiFillLinkedin />,
    title: 'Anastasiya on LinkedIn',
  },
  {
    id: '4',
    link: 'mailto:naztya12323@gmail.com',
    icon: <AiTwotoneMail />,
    title: 'Send an e-mail',
  },
];

export { navLinks, authorsContacts };
