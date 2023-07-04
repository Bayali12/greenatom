import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const Button = ({ children, onClick, classname }) => {
  return (
    <button className={classNames(classname, styles.button)} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  classname: PropTypes.string,
};
