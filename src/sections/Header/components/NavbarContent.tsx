import { NavbarLinks } from "./NavbarLinks";
import { MobileMenuToggle } from "./MobileMenuToggle";
import styles from './navbarContent.module.css';

export const NavbarContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <NavbarLinks />
        <div className={styles.absoluteCenter}></div>
        <MobileMenuToggle />
      </div>
    </div>
  );
};