import styles from './navlinks.module.css';

export const NavbarLinks = () => {
  return (
    <div className={styles.container}>
      <a
        href="/"
        className={styles.linkHome}
      >
        <div className={styles.linkHomeText}>Home</div>
      </a>
      <a
        href="https://webflow.com/@added"
        className={styles.linkWebflow}
      >
        <div className={styles.webflowIconContainer}>
          <img
            src="https://c.animaapp.com/mgrmwkbjEVesmp/assets/icon-2.svg"
            alt="Icon"
            className={styles.webflowIcon}
          />
        </div>
      </a>
    </div>
  );
};