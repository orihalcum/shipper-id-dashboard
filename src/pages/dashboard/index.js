import React from 'react';
import MainLayout from '../../components/layouts/main';

const PageDashboard = () => {
  return (
    <MainLayout>
      <div className="main-content">
        <div style={{ backgroundColor: 'white', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="/shipperLogo.png" alt="shipper" style={{ height: 60 }}/>
        </div>
      </div>
    </MainLayout>
  )
};

export default PageDashboard;