import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import CustomerFeedback from './CustomerFeedback';
import styles from './Dashboard.module.css';
import GridList from './GridList';
import NetProfile from './NetProfile';
import MenuList from './MenuList';


const sampleItems = [
  {
    icon: '📦',
    title: 'Total Orders',
    count: '75',
    percentage: '3%'
  },
  {
    icon: '📦',
    title: 'Total Delivered',
    count: '70',
    percentage: '3%'
  },
  {
    icon: '📦',
    title: 'Total Cancelled',
    count: '80',
    percentage: '3%'
  },
  {
    icon: '📦',
    title: 'Total Revenue',
    count: '$12k',
    percentage: '3%'
  },
];

const MenuListItems = [
  {
    icon: '📦',
    title: 'Goals',
    arrow: '>',
  },
  {
    icon: '📦',
    title: 'Popular Dishes',
    arrow: '>',
  },
  {
    icon: '📦',
    title: 'Menus',
    arrow: '>',
  }
];

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar />
         <main className={styles.main}>
          <div className={styles.left}>
            <h2>Dashboard</h2>
            <div className={styles.widget}>
              <GridList items={sampleItems} />
            </div>
            <div className={styles.widget}>
              <h2>Activity</h2>
              <ActivityChart />
            </div>
            <div className={styles.widget}>
              <RecentOrders />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.widget}>
              <NetProfile />
            </div>
            <div className={styles.widget}>
              <MenuList items={MenuListItems}/>
            </div>
            <div className={styles.widget}>
              <CustomerFeedback />
            </div>
          </div>
        </main>
      </div> 
    </>
  );
};

export default Dashboard;