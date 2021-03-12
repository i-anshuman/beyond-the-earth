import Card from '../components/card';
import { Link } from 'react-router-dom';
import { sections } from '../app';
import styles from '../styles/pages/home.module.scss';

const Home = props => {
  return (
    <main className={styles.home}>
      <h1 className={styles.home__title}>Explore</h1>
      {
        sections.map(({title, image, link, desc}, idx) => (
          <Link to={link} key={idx} className={styles.home__card}>
            <Card title={title} image={image} desc={desc} />
          </Link>
        ))
      }
    </main>
  );
};

export default Home;
