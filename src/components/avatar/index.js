import React from 'react';

const Avatar = ({ url, alt = '...' }) => {
  return (
    <div className="avatar">
      <img src={ url || '/image-user.png' } alt={ alt } className="avatar__img"/>
    </div>
  );
};

export default Avatar;