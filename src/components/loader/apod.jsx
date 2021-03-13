import stylesApod from '../../styles/components/apod.module.scss';
import stylesLoader from '../../styles/components/loader.module.scss';

const ApodLoader = props => {
  return (
    <div className={`${stylesApod.apod} ${stylesLoader.loader}`}>
      <figure className={stylesApod.apod__fig}>
        <div className={stylesLoader.loader__img} />
        <figcaption className={stylesApod.apod__caption}>
          <p>Date: YYYY-MM-DD</p>
          <p>&copy; Rights Holder</p>
        </figcaption>
      </figure>
      <div className={stylesApod.apod__details}>
        <h2 className={stylesApod.apod__title}>
          Title of the APOD
        </h2>
        <p className={stylesApod.apod__explanation}>
          Explanation of the picture.<br/>Explanation of the picture.<br/>Explanation of the picture.
        </p>
        <p className={stylesApod.apod__explanation}>
          Explanation of the picture.<br/>Explanation of the picture.<br/>Explanation of the picture.
        </p>
        <p className={stylesApod.apod__explanation}>
          Explanation of the picture.<br/>Explanation of the picture.
        </p>
      </div>
    </div>
  );
};

export default ApodLoader;
