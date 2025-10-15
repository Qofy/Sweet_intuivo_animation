import { NavbarContent } from "./NavbarContent";
import styles from './navbar.module.css';

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.divider}></div>
      <NavbarContent />
    </div>
  );
};