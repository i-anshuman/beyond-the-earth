import PropTypes from 'prop-types';
import styles from '../../styles/components/card.module.scss';

const Card = ({ title, image, desc }) => {
  return (
    <div className={styles.card}>
      <img
        src={image}
        alt={title}
        className={styles.card__img}
      />
      <h3 className={styles.card__title}>
        {title}
      </h3>
      <p className={styles.card__desc}>
        {desc}
      </p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string
};

Card.defaultProps = {
  desc: ""
};

export default Card;
