import { HeaderOverlay } from "./components/HeaderOverlay";
import { Navbar } from "./components/Navbar";
import styles from './index.module.css';

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <HeaderOverlay />
      <Navbar />
      <main className={styles.main}>
        <div className={styles.heroSection}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <div className={styles.heroGrid}>
                {/* ...rest of your content, convert each className to styles.[class] ... */}
              </div>
            </div>
          </div>
          {/* ...continue converting all other sections and elements... */}
        </div>
      </main>
    </div>
  );
};