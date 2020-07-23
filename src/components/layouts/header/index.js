import React from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, PhoneOutlined, BellOutlined } from '@ant-design/icons'
// import { NavLink } from 'react-router-dom'

const MainHeader = ({ collapse, toggleSideBar }) => {
  return (
    <div className="main-header">
      <div className="main-header__left">
        <a href="#" onClick={ () => toggleSideBar(!collapse) } aria-label="menu-fold-unfold">
          { !collapse ? <MenuFoldOutlined /> : <MenuUnfoldOutlined /> }
        </a>
      </div>
      <div className="main-header__right">
        <div>
          <a href="#">
            <PhoneOutlined/>
          </a>
          <a href="#" className="has-notification">
            <BellOutlined />
          </a>
        </div>
        <div>
          Hello, &nbsp; <a href="#">Dzulfan Fadli</a>
          <img src="/image-user.png" alt="user" />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;