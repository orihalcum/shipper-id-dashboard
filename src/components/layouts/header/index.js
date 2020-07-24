import React from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, PhoneOutlined, BellOutlined } from '@ant-design/icons'
// import { NavLink } from 'react-router-dom'

const MainHeader = ({ collapse, toggleSideBar }) => {
  return (
    <div className="main-header">
      <div className="main-header__left">
        <a href="/" onClick={ e => { e.preventDefault(); toggleSideBar(!collapse) } } aria-label="menu-fold-unfold">
          { !collapse ? <MenuFoldOutlined /> : <MenuUnfoldOutlined /> }
        </a>
      </div>
      <div className="main-header__right">
        <div className="main-header__right__icons">
          <a href="/" onClick={ e => { e.preventDefault(); } }>
            <PhoneOutlined/>
          </a>
          <a href="/" onClick={ e => { e.preventDefault(); } } className="has-notification">
            <BellOutlined />
          </a>
        </div>
        <div className="main-header__right__user">
          <span>Hello, &nbsp; <a href="/" onClick={ e => { e.preventDefault(); } }>Dzulfan Fadli</a></span>
          <img src="/image-user.png" alt="user" />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;