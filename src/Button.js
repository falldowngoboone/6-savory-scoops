import React from 'react';

import * as styles from './Button.module.scss';

function Button({ className, ...props }) {
  const classes = [className, styles.button].filter(Boolean).join(' ');
  return <button className={classes} {...props} />;
}

export default Button;
