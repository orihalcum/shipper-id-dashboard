import React from 'react';

export const Progress = () => {
  return null;
};

export const ProgressCircle = ({ count }) => {
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