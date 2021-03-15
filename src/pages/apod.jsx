import Apod from '../components/apod';
import ApodLoader from '../components/loader/apod';
import ErrorBanner from '../components/error';
import { useAxios } from '../adapters';
import { api } from '../app';
import pages from '../styles/pages/page.module.scss';
import styles from '../styles/pages/apod.module.scss';

const ApodPage = props => {
  const [response, error, waiting] = useAxios(`${api}planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`)
  return (
    <main className={`${pages.page} ${styles.apod}`}>
      <h1 className={pages.page__title}>
        Astronomy Picture of the Day
      </h1>
      { waiting && <ApodLoader /> }
      { error && <ErrorBanner /> }
      {
        response &&
        <Apod
          src={response.url}
          date={response.date}
          copyright={response.copyright}
          title={response.title}
          explanation={response.explanation}
          mediaType={response.media_type}
        />
      }
    </main>
  );
};

export default ApodPage;
