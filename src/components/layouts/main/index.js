import React from 'react';
import MainSideBar from '../sidebar';
import MainHeader from '../header';
import MainContent from './content';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <MainSideBar />
      <div className="main-container">
        <MainHeader />
        <MainContent>
          { children }
        </MainContent>
      </div>
    </div>
  );
};

export default MainLayout;