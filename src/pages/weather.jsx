//import { useAxios } from '../adapters';
//import { api } from '../app';
import pages from '../styles/pages/page.module.scss';
import styles from '../styles/components/apod.module.scss';

const MarsWeather = props => {
  //const [response, error, waiting] = useAxios(`${api}insight_weather/?api_key=${process.env.REACT_APP_API_KEY}&feedtype=json&ver=1.0`);
  //console.log(response)
  return (
    <main className={`${pages.page}`}>
      <h1 className={pages.page__title}>
        Weather Report From Mars.
      </h1>
      <div className={styles.apod}>
        <iframe
          src='https://mars.nasa.gov/layout/embed/image/mslweather/'
          width='800'
          height='600'
          scrolling='no'
          frameborder='0'
          title="Mars Weather Report"></iframe>
      </div>
    </main>
  );
};

export default MarsWeather;
