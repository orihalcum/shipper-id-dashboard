import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { NAV_MENU } from '../../../config'
import { MenuFoldOutlined } from '@ant-design/icons'


const MainSideBar = ({ collapse, toggleSideBar, location }) => {

  // Set state navigation menu here
  const [navMenu, setNavMenu] = useState(NAV_MENU)

  // Set active menu according to the current page using location.pathname comparison
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

// Navigation Item Component
export const NavItem = ({ title, icon, link, active }) => (
  <div className={ `main-sidebar__nav__item ${ active ? 'active' : '' }` }>
    <Link to={ link } className="main-sidebar__nav__item__link">
      <span className="main-sidebar__nav__item__link__icon">{ icon }</span>
      <span className="main-sidebar__nav__item__link__title">{ title }</span>
    </Link>
  </div>
)

export default MainSideBar;


// Implement Proptypes, it's very important for component splitting ( especially if use SSR Next.js )
// but I only put here as an example of PropTypes

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