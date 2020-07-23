import React, { useState, useEffect } from 'react';
import MainSideBar from '../sidebar';
import MainHeader from '../header';
import MainContent from './content';

const MainLayout = ({ children }) => {

  const [collapse, toggleSideBar] = useState(false)

  useEffect(() => {
    console.log('collapse', collapse)
  }, [collapse])

  return (
    <div className="main-layout">
      <MainSideBar collapse={ collapse } />
      <div className="main-container">
        <MainHeader toggleSideBar={ toggleSideBar } collapse={ collapse } />
        <MainContent>
          { children }
        </MainContent>
      </div>
    </div>
  );
};

export default MainLayout;