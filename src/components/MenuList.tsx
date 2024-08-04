import React from 'react';
import styles from './MenuList.module.css'


interface MenuItem {
    icon: string;
    title: string;
    arrow: string;
  }
  
  interface Props {
    items: MenuItem[];
  }

const MenuList:React.FC<Props> = ({items}) => {
  return <div>
    <div className={styles.gridList}>
        {items.map((item, index) => (
        <div className={styles.gridItem} key={index}>
            <p className={styles.icon}>{item.icon}</p>
            <p>{item.title}</p>
            <p>{item.arrow}</p>
        </div>
        ))}
    </div>
  </div>
}

export default MenuList