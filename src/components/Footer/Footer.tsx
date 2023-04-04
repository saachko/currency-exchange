import React, { memo } from 'react';

import { authorsContacts } from 'utils/constants';

import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className="d-flex gap-2 justify-content-center">
          {authorsContacts.map((contact) => (
            <a
              key={contact.id}
              href={contact.link}
              target="_blank"
              title={contact.title}
              rel="noreferrer"
            >
              {contact.icon}
            </a>
          ))}
        </div>
        <p className={styles.copyright}>Анастасия Сачко © 2023</p>
      </div>
    </footer>
  );
}

export default memo(Footer);
