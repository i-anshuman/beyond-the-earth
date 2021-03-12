import styles from '../../styles/components/header.module.scss';
import { title, description } from '../../app';

const Header = props => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>
        {title}
      </h1>
      <p className={styles.header__desc}>
        {description}
      </p>
    </header>
  );
};

export default Header;
