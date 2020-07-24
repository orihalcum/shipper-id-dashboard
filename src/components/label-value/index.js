import React from 'react';

const LableValue = ({ lable, value }) => {
  return (
    <div className="lable-value">
      <div className="lable-value__lable">{ lable }</div>
      <div className="lable-value__value">{ value }</div>
    </div>
  );
};

export default LableValue;