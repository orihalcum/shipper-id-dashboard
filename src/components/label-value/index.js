import React from 'react';

const LabelValue = ({ label, value }) => {
  return (
    <div className="label-value">
      <div className="label-value__label">{ label }</div>
      <div className="label-value__value">{ value }</div>
    </div>
  );
};

export default LabelValue;