import React from 'react';
import { HomeOutlined, CalendarOutlined, FileDoneOutlined, CarOutlined, ShopOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons'

const NAV_MENU = [
  { title: 'Beranda', icon: <HomeOutlined />, link: "/", active: false },
  { title: 'Pickup', icon: <CalendarOutlined />, link: "/", active: false },
  { title: 'Order', icon: <FileDoneOutlined />, link: "/", active: false },
  { title: 'Driver', icon: <CarOutlined />, link: "/driver", active: true },
  { title: 'Merchant', icon: <ShopOutlined />, link: "/", active: false },
  { title: 'Laporan', icon: <PieChartOutlined />, link: "/", active: false },
  { title: 'Profil', icon: <UserOutlined />, link: "/", active: false },
]

const MainSideBar = () => {
  return (
    <div className="main-sidebar">
      <div className="main-sidebar__logo">
        <img src="/shipperLogo.png" alt="shipper-logo"/>
      </div>
      <div className="main-sidebar__nav">
        { NAV_MENU.map((v, k) => <NavItem key={k} {...v} /> ) }
      </div>
    </div>
  );
};

const NavItem = ({ title, icon, link, active }) => (
  <div className={ `main-sidebar__nav__item ${ active ? 'active' : '' }` }>
    <a href={ link } className="main-sidebar__nav__item__link">
      <span className="main-sidebar__nav__item__link__icon">{ icon }</span>
      <span className="main-sidebar__nav__item__link__title">{ title }</span>
    </a>
  </div>
)

export default MainSideBar;