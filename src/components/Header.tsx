import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <input type="text" placeholder="Search..." className={styles.search} />
      <div className={styles.icons}>
        <span>🔔</span>
        <span>📧</span>
        <span>👤</span>
      </div>
    </header>
  );
};

export default Header;