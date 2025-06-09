import React from 'react';
import styles from './SkeletonLoader.module.css';

const SkeletonLoader = () => {
  return (
    <div className={styles['skeleton-card']}>
      <div className={styles['skeleton-line']}></div>
      <div className={`${styles['skeleton-line']} ${styles.medium}`}></div>
      <div className={`${styles['skeleton-line']} ${styles.short}`}></div>
    </div>
  );
};

export default SkeletonLoader; 