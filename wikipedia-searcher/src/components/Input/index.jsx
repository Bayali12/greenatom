import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const Input = ({ classname, value, onChange, placeholder, onKeyDown }) => {
  return (
    <input
      className={classNames(classname, styles.input)}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
    />
  );
};

Input.propTypes = {
  classname: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  onKeyDown: PropTypes.func,
};
