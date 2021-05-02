import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary','btn--outline']  // these are css classes which are implemented in button.css

const SIZES = ['btn--medium','btn--large'] // these are css classes which are implemented in button.css

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize 
}) => {

  const checkButtonStyle= STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize= SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return(
    <Link to='/sign-up' className="btn--mobile">
      <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type} >
        {children}
      </button>
    </Link>
  );


};