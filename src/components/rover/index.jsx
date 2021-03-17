import { useState } from 'react';
import PropTypes from 'prop-types';
import Loader from '../loader/loader';
import styles from '../../styles/components/rover.module.scss';
import apod from '../../styles/components/apod.module.scss';
import ErrorBanner from '../error';

const RoverPhotos = ({photos, children}) => {
  const [index, setIndex] = useState(0);
  const [isLoading, toggleLoading] = useState(true);

  const previous = e => {
    if (index > 0) {
      setIndex(index => index-1);
      toggleLoading(true);
    }
  };

  const next = e => {
    if (index < photos.length-1) {
      setIndex(index => index+1);
      toggleLoading(true);
    }
  };

  return (
    <div className={`${apod.apod} ${styles.rover}`}>
      {children}
      {
        photos.length === 0 ?
        <ErrorBanner message="Not a single photo found!" linkToHome={false} /> :
        <figure className={styles.rover__fig}>
          { isLoading && <Loader />}
          <img
            className={styles.rover__img}
            src={photos[index].img_src}
            alt={`Captured by ${photos[index].rover.name} from ${photos[index].camera.full_name} on ${photos[index].earth_date}.`}
            onLoad={() => toggleLoading(false)}
          />
          <figcaption className={styles.rover__figcaption}>
            <button
              onClick={previous}
              className={styles.rover__controls}
            >
              <i className="fa fa-angle-left"></i>
            </button>
            <span className={styles.rover__figindex}>
              {(index+1)} of {photos.length}
            </span>
            <button onClick={next} className={styles.rover__controls}>
              <i className="fa fa-angle-right"></i>
            </button>
            <p className={styles.rover__figinfo}>
              {`Captured by ${photos[index].rover.name} from ${photos[index].camera.full_name} on ${photos[index].earth_date}.`}
            </p>
          </figcaption>
        </figure>
      }
    </div>
  );
};

RoverPhotos.propTypes = {
  children: PropTypes.any,
  photos: PropTypes.array.isRequired
};

export default RoverPhotos;
