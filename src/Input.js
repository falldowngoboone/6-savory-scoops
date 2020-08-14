import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Input.module.scss';

const inputProps = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

function Input({ label, id, ...props }) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input className={styles.input} id={id} {...props} />
    </div>
  );
}

Input.propTypes = inputProps;

export default Input;
