import React from 'react';
import { SearchOutlined } from '@ant-design/icons'

/**
 * 
 * Form input search
 * when focus it will appear animation pulse
 * it will be great for all form input or button action
 * 
 */

const Search = ({ size = 'md', onSearch, onChange, placeholder }) => {
  return (
    <div className={ `mr-15 search search--${size}` } data-testid="search">
      <SearchOutlined />
      <input placeholder={ placeholder } onChange={ e => onChange(e.target.value) } aria-label="search"  data-testid="search-input"/>
    </div>
  );
};

export default Search;