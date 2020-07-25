import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, PhoneOutlined, BellOutlined } from '@ant-design/icons'

const MainHeader = ({ collapse, toggleSideBar }) => {

  // Setting user, generally from api / stored cookies
  const [user] = useState({
    name: 'Dzulfan Fadli',
    avatar: "/image-user.png"
  })

  return (
    <div className="main-header">
      <div className="main-header__left">
        <a href="/" onClick={ e => { e.preventDefault(); toggleSideBar(!collapse) } } className="toggle-sidebar" aria-label="menu-fold-unfold">
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
          <span>Hello, &nbsp; <a href="/" onClick={ e => { e.preventDefault(); } }>{ user.name }</a></span>
          <img src={ user.avatar } alt="user" />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;