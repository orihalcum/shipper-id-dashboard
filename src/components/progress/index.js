import React from 'react';

/**
 * 
 * Progress Circle with HTML and CSS only
 * It will be simple if use third party library 😄
 * 
 */

export const ProgressCircle = ({ count = 0 }) => {
  return (
    <div>
      <div className={ `progress--circle progress--${count}` }>
        <div className="progress__number">
          <h3 className={ `color-${ count > 0 ? 'primary' : 'default' }` }>{count}%</h3>
          <small>{ count > 0 ? 'Ontime' : '' }</small>
        </div>
      </div>
    </div>
  );
};