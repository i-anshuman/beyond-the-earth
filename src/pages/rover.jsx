import { useState } from 'react';
import RoverPhoto from '../components/rover';
import Loader from '../components/loader/loader';
import { useAxios } from '../adapters';
import { getDate } from '../lib';
import { api } from '../app';
import pages from '../styles/pages/page.module.scss';
import styles from '../styles/pages/rover.module.scss';
import RoverLoader from '../components/loader/rover';
import ErrorBanner from '../components/error';

const RoverPhotosPage = props => {
  const [day, setDay] = useState(-1);
  const [response, error, waiting] = useAxios(`${api}mars-photos/api/v1/rovers/curiosity/photos?earth_date=${getDate(day)}&api_key=${process.env.REACT_APP_API_KEY}`);

  const prev = () => setDay(day => day-1);

  const next = () => {
    if(day < -1) {
      setDay(day => day+1);
    }
  };

  return (
    <main className={`${pages.page} ${styles.rover}`}>
      <h1 className={pages.page__title}>
        Mars Rover Photos
      </h1>
      { waiting && <RoverLoader /> }
      { error && <ErrorBanner /> }
      {
        response &&
        <RoverPhoto photos={response.photos}>
          { waiting && <Loader /> }
          <div className={styles.rover__control}>
            <button onClick={prev}>
              <i className="fa fa-angle-left fa-2x"></i>
              &nbsp;Previous Date
            </button>
            <span>{getDate(day)}</span>
            <button onClick={next}>
              Next Date&nbsp;
              <i className="fa fa-angle-right fa-2x"></i>
            </button>
          </div>
        </RoverPhoto>
      }
    </main>
  );
};

export default RoverPhotosPage;
