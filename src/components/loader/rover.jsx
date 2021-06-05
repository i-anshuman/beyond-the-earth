import stylesRover from '../../styles/components/rover.module.scss';
import stylesApod from '../../styles/components/apod.module.scss';
import stylesLoader from '../../styles/components/loader.module.scss';

const RoverLoader = props => {
  return (
    <div className={`${stylesApod.apod} ${stylesRover.rover} ${stylesLoader.loader}`}>
      <figure className={stylesRover.rover__fig}>
        <div className={stylesLoader.loader__img_rover} />
        <figcaption className={stylesRover.rover__figcaption}>
          <span> Control </span>
          <span> X of XXX </span>
          <span> Control </span>
          <p className={stylesRover.rover__figinfo}>
            Captured by curiosity from Front Hazard Avoidance Camera on 2021-11-02.
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default RoverLoader;
