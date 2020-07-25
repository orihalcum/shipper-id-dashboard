import React, { useState } from 'react';
import MainSideBar from '../sidebar';
import MainHeader from '../header';
import { useLocation } from 'react-router-dom'

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
  const [collapse, setCollapse] = useState((localStorage.getItem('collapse') === 'true') || false)

  // Toggle sidebar for handle sidebar toggle
  const toggleSideBar = (val) => {
    setCollapse(val)
    // use localStorage for store variable, 
    // so we can doing transition to other page with current sidebar state
    localStorage.setItem('collapse', val) 
  }
  
  // Make props simple here
  // Props can be replace by Context or other State Management Library
  const sideBarProps = {
    collapse,
    toggleSideBar,
    location
  }

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