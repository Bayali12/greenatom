import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export const Article = ({ title, description, link }) => {
  return (
    <div className={styles.container}>
      <a href={link} target="_blank" rel="noreferrer">
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
      </a>
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
