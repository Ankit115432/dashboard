// src/GridList.js
import React from 'react';
import styles from './GridList.module.css';

// Define the types for the item and props
interface GridItem {
    icon: string;
    title: string;
    count: string;
    percentage: string;
  }
  
  interface GridListProps {
    items: GridItem[];
  }
  

const GridList: React.FC<GridListProps> = ({ items }) => {
  return (
    <div className={styles.gridList}>
        {items.map((item, index) => (
        <div className={styles.gridItem} key={index}>
            <p>{item.icon}</p>
            <p>{item.title}</p>
            <div className={styles.flexDiv}>
                <p>{item.count}</p>
                <p>{item.percentage}</p>
            </div>
        </div>
        ))}
    </div>
  );
};

export default GridList;
