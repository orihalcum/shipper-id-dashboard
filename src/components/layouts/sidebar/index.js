import React, { useEffect, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom'

import { HomeOutlined, CalendarOutlined, FileDoneOutlined, CarOutlined, ShopOutlined, PieChartOutlined, UserOutlined, MenuFoldOutlined } from '@ant-design/icons'

const NAV_MENU = [
  { title: 'Beranda', icon: <HomeOutlined />, link: "/", active: false },
  { title: 'Pickup', icon: <CalendarOutlined />, link: "/pickup", active: false },
  { title: 'Order', icon: <FileDoneOutlined />, link: "/order", active: false },
  { title: 'Driver', icon: <CarOutlined />, link: "/driver", active: false },
  { title: 'Merchant', icon: <ShopOutlined />, link: "/merchant", active: false },
  { title: 'Laporan', icon: <PieChartOutlined />, link: "/laporan", active: false },
  { title: 'Profil', icon: <UserOutlined />, link: "/profil", active: false },
]

const MainSideBar = ({ collapse, toggleSideBar }) => {

  const location = useLocation();
  const [navMenu, setNavMenu] = useState(NAV_MENU)

  useEffect(() => {
    setNavMenu(navMenu.map(v => { v.active = location.pathname === v.link; return v; }))
  }, [location])

  return (
    <div className={ `main-sidebar ${ collapse ? 'collapse' : '' }` }>
      <div className="main-sidebar__logo">
        <img className="main-sidebar__logo__mobile" src="/shipperLogo.png" alt="shipper-logo"/>
        <img className="main-sidebar__logo__desktop" src={ !collapse ? "/shipperLogo.png" : "/shipperIcon.png" } alt="shipper-logo"/>
        <a href="#" onClick={ () => toggleSideBar(!collapse) } aria-label="menu-fold-unfold">
          <MenuFoldOutlined />
        </a>
      </div>
      <div className="main-sidebar__nav">
        { navMenu.map((v, k) => <NavItem key={k} {...v} /> ) }
      </div>
    </div>
  );
};

const NavItem = ({ title, icon, link, active }) => (
  <div className={ `main-sidebar__nav__item ${ active ? 'active' : '' }` }>
    <NavLink to={ link } className="main-sidebar__nav__item__link">
      <span className="main-sidebar__nav__item__link__icon">{ icon }</span>
      <span className="main-sidebar__nav__item__link__title">{ title }</span>
    </NavLink>
  </div>
)

export default MainSideBar;