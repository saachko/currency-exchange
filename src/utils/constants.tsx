import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { GroupBase, StylesConfig } from 'react-select';

import { Contact, Currency, NavLink, SelectOption } from 'ts/interfaces';

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

const currencyBYN: Currency = {
  Cur_ID: 933,
  Date: `${new Date()}`,
  Cur_Abbreviation: 'BYN',
  Cur_Scale: 1,
  Cur_Name: 'Белорусский рубль',
  Cur_OfficialRate: 1,
};

const selectStyles: StylesConfig<
  string | SelectOption,
  boolean,
  GroupBase<SelectOption>
> = {
  control: (base, { isFocused }) => ({
    ...base,
    border: isFocused ? `1px solid #4b7325` : ``,
    boxShadow: isFocused ? '0 0 0 0.25rem #91b3688d' : '',
    '&:hover': {
      border: isFocused ? `1px solid #4b7325` : ``,
    },
  }),
  option: (base, { isFocused, isSelected }) => ({
    ...base,
    backgroundColor: isSelected ? '#91b3688d' : '',
    transition: 'all 0.2s ease-out',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: isFocused ? '#dad9d6' : '',
    },
  }),
};

export { navLinks, authorsContacts, currencyBYN, selectStyles };
