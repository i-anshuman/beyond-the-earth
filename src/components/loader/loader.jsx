import styles from '../../styles/components/loader.module.scss';

const Loader = ({ text }) => {
  return (
    <div className={styles.overlay}>
      {
        [...text].map((char, idx) => (
          <span>{char}</span>
        ))
      }
    </div>
  );
};

Loader.defaultProps = {
  text: "LOADING"
};

export default Loader;
