import clsx from 'clsx';
import React, { memo } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';

import Logo from 'components/Logo/Logo';

import { navLinks } from 'utils/constants';

import styles from './Header.module.scss';

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.title}>
        <Logo />
        <h1 className="m-0">Конвертер валют</h1>
      </NavLink>
      <Nav className={styles.headerNavbar}>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            end
            className={clsx(styles.headerNavLink, {
              [styles.active]: currentPath === link.path,
            })}
          >
            {link.name}
          </NavLink>
        ))}
      </Nav>
    </header>
  );
}

export default memo(Header);
