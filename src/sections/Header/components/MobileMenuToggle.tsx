import styles from './mobileToggle.module.css';

export const MobileMenuToggle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        Open
      </div>
      <div className={styles.text}>
        Close
      </div>
    </div>
  );
};