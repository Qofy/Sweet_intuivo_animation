import styles from "./floating.module.css";

export const FloatingCTA = () => {
  return (
    <div className={styles.container}>
      <a
        href="https://www.awwwards.com/sites/added-2"
        className={styles.link}
      >
        <img
          src="https://c.animaapp.com/mgrmwkbjEVesmp/assets/icon-1.svg"
          alt="Icon"
          className={styles.icon}
        />
      </a>
    </div>
  );
};
