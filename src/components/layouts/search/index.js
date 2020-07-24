import React from 'react';
import { SearchOutlined } from '@ant-design/icons'

const Search = ({ size = 'md', onSearch, onChange, placeholder }) => {
  return (
    <div className={ `mr-15 search search--${size}` }>
      <SearchOutlined />
      <input placeholder={ placeholder }/>
    </div>
  );
};

export default Search;