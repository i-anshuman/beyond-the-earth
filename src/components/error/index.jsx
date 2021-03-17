import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../../styles/components/error.module.scss';

const ErrorBanner = ({message, linkToHome}) => {
  return (
    <div className={styles.error}>
      <h1 className={styles.error__title}>
        {message}
      </h1>
      <h3>Try again later</h3>
      {
        linkToHome &&
        <Link to="/" className={styles.error__back}>
          Back to Home
        </Link>
      }
    </div>
  );
};

ErrorBanner.defaultProps = {
  message: "Ops... Something went wrong.",
  linkToHome: true
};

ErrorBanner.propTypes = {
  message: PropTypes.string,
  linkToHome: PropTypes.bool
};

export default ErrorBanner;
