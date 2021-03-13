import PropTypes from 'prop-types';
import TextWrap from '../text-wrap';
import styles from '../../styles/components/apod.module.scss';

const Apod = ({ src, date, copyright, title, explanation}) => {
  return (
    <div className={styles.apod}>
      <figure className={styles.apod__fig}>
        <img
          src={src}
          alt={title}
          className={styles.apod__img}
        />
        <figcaption className={styles.apod__caption}>
          { date && <p>Date: {date}</p> }
          { copyright && <p>&copy; {copyright}</p> }
        </figcaption>
      </figure>
      <div className={styles.apod__details}>
        <h2 className={styles.apod__title}>{title}</h2>
        <TextWrap className={styles.apod__explanation}>{explanation}</TextWrap>
      </div>
    </div>
  );
};

Apod.propTypes = {
  date: PropTypes.string,
  copyright: PropTypes.string,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired
};

Apod.defaultProps = {
  date: "",
  copyright: ""
};

export default Apod;
