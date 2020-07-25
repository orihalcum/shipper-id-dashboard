import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HomeOutlined, CalendarOutlined, FileDoneOutlined, CarOutlined, ShopOutlined, PieChartOutlined, UserOutlined, MenuFoldOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'

const NAV_MENU = [
  { title: 'Beranda', icon: <HomeOutlined />, link: "/", active: false },
  { title: 'Pickup', icon: <CalendarOutlined />, link: "/pickup", active: false },
  { title: 'Order', icon: <FileDoneOutlined />, link: "/order", active: false },
  { title: 'Driver', icon: <CarOutlined />, link: "/driver", active: false },
  { title: 'Merchant', icon: <ShopOutlined />, link: "/merchant", active: false },
  { title: 'Laporan', icon: <PieChartOutlined />, link: "/laporan", active: false },
  { title: 'Profil', icon: <UserOutlined />, link: "/profil", active: false },
]

const MainSideBar = ({ collapse, toggleSideBar, location }) => {

  const [navMenu, setNavMenu] = useState(NAV_MENU)

  useEffect(() => {
    let nav = navMenu.map(v => { v.active = location.pathname === v.link; return v; })
    setNavMenu(nav)
    // eslint-disable-next-line
  }, [location])

  return (
    <div className={ `main-sidebar ${ collapse ? 'collapse' : '' }` }>
      <div className="main-sidebar__logo">
        <img className="main-sidebar__logo__mobile" src="/shipperLogo.png" alt="shipper-logo"/>
        <img className="main-sidebar__logo__desktop" src={ !collapse ? "/shipperLogo.png" : "/shipperIcon.png" } alt="shipper-logo"/>
        <a href="/" onClick={ e => { e.preventDefault(); toggleSideBar(!collapse) } } aria-label="menu-fold-unfold">
          <MenuFoldOutlined />
        </a>
      </div>
      <div className="main-sidebar__nav">
        { navMenu.map((v, k) => <NavItem key={k} {...v} /> ) }
      </div>
    </div>
  );
};

export const NavItem = ({ title, icon, link, active }) => (
  <div className={ `main-sidebar__nav__item ${ active ? 'active' : '' }` }>
    <Link to={ link } className="main-sidebar__nav__item__link">
      <span className="main-sidebar__nav__item__link__icon">{ icon }</span>
      <span className="main-sidebar__nav__item__link__title">{ title }</span>
    </Link>
  </div>
)

export default MainSideBar;

MainSideBar.propTypes = {
  collapse: PropTypes.bool, 
  toggleSideBar: PropTypes.func, 
  location: PropTypes.object
}

MainSideBar.defaultProps = {
  collapse: false,
  toggleSideBar: null,
  location: {
    pathname: '/'
  }
}