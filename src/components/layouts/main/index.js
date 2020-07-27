import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import MainSideBar from '../sidebar';
import MainHeader from '../header';

/**
 * 
 * Layout Structure built from : 
 * Main Layout as a wrapper and another components like : Sidebar, Header and Content
 * For Header and Content it wrapped by container
 * 
 */

const MainLayout = ({ children }) => {

  // Define Vars
  // location for handle current location path
  // collapse for handle sidebar collapible
  const location = useLocation();
  const [collapse, setCollapse] = useState(initCollapse())
  const [windowWidth, setWindowWidth] = useState(0)
  // Toggle sidebar for handle sidebar toggle
  const toggleSideBar = (val) => {
    setCollapse(val)
    // use localStorage for store variable, 
    // so we can doing transition to other page with current sidebar state
    localStorage.setItem('collapse', val) 
  }
  
  // Make props simple here
  // Props can be replaced by Context or other State Management Library
  const sideBarProps = {
    collapse,
    toggleSideBar,
    location
  }

  useEffect(() => {
    // hide navigation for mobile
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
      if(window.innerWidth <= 600) toggleSideBar(false)
    })
  }, [windowWidth])

  return (
    <div className="main-layout">
      <MainSideBar { ...sideBarProps } />
      <div className="main-container">
        <MainHeader { ...sideBarProps } />
        { children }
      </div>
    </div>
  );
};

export default MainLayout;

// handle initial collapse desktop and mobile
// using same source navigation to handle collapsible, need to adjust 
function initCollapse() {
  let collapse = false;
  if(window.innerWidth > 600){
    if(localStorage.getItem('collapse') === 'true') collapse = true;
  }
  return collapse;
}



// notes: app height have issue on chrome ipad