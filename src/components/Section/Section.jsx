import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={styles['Section']}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
