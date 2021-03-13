import { Link } from 'react-router-dom';
import styles from '../../styles/components/error.module.scss';

const ErrorBanner = props => {
  return (
    <div className={styles.error}>
      <h1 className={styles.error__title}>
        Oopppssss...Something went wrong.
      </h1>
      <h3>Try again later</h3>
      <Link to="/" className={styles.error__back}>
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorBanner;
