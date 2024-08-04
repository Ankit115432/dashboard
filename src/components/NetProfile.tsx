import React from 'react';
import styles from './NetProfile.module.css'

interface Props {}

const NetProfile = () => {
  return (
  <div className={styles.netProfitDiv}>
    <div className={styles.left}>
        <p>Net Profit</p>
        <h3>$6759.25</h3>
        <p>3%</p>
    </div>
    <div className={styles.right}>
        <h1>70%</h1>
    </div>
  </div>
  );
}

export default NetProfile