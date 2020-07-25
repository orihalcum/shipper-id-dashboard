import React, { useState } from 'react';
import MainSideBar from '../sidebar';
import MainHeader from '../header';
import { useLocation } from 'react-router-dom'

const MainLayout = ({ children }) => {

  const location = useLocation();
  const [collapse, setCollapse] = useState((localStorage.getItem('collapse') === 'true') || false)

  const toggleSideBar = (val) => {
    setCollapse(val)
    localStorage.setItem('collapse', val)
  }
  
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