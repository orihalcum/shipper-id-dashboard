import React, { useState, useEffect } from 'react';
import MainSideBar from '../sidebar';
import MainHeader from '../header';

const MainLayout = ({ children }) => {

  const [collapse, setCollapse] = useState((localStorage.getItem('collapse') === 'true') || false)

  const toggleSideBar = (val) => {
    setCollapse(val)
    localStorage.setItem('collapse', val)
  }

  useEffect(() => {
    // console.log('useEffect collapse', collapse)
  }, [collapse])

  const sideBarProps = {
    collapse,
    toggleSideBar
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