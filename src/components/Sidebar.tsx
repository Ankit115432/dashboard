import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.menuItem}>🏠 Dashboard</div>
      <div className={styles.menuItem}>📦 Orders</div>
      <div className={styles.menuItem}>📊 Reports</div>
      <div className={styles.menuItem}>⚙️ Settings</div>
    </aside>
  );
};

export default Sidebar;