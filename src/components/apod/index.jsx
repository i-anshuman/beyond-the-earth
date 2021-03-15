import PropTypes from 'prop-types';
import TextWrap from '../text-wrap';
import styles from '../../styles/components/apod.module.scss';

const Apod = ({ src, date, copyright, title, explanation, mediaType}) => {
  return (
    <div className={styles.apod}>
      <figure className={styles.apod__fig}>
        {
          mediaType === 'image' ?
          <img
            src={src}
            alt={title}
            className={styles.apod__img}
          /> :
          <iframe
            className={styles.apod__video}
            allowfullscreen="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title={title}
            src={src}
            frameborder="0"
          >
          </iframe>
        }
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
  explanation: PropTypes.string.isRequired,
  mediaType: PropTypes.oneOf(['video', 'image']).isRequired
};

Apod.defaultProps = {
  date: "",
  copyright: ""
};

export default Apod;
