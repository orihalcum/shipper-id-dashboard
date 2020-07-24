import React from 'react';
import MainLayout from '../../components/layouts/main';
import { PlusOutlined } from '@ant-design/icons'
import Button from '../../components/layouts/button';
import Search from '../../components/layouts/search';

const PageDriver = () => {

  const handleClick = () => {}

  return (
    <MainLayout>
      <div className="main-content">
        <div className="main-content__header">
          <div className="main-content__header__left">
            <h1 className="main-content__header__title">Driver Management</h1>
            <h5 className="main-content__header__subtitle">Daftar Driver yang bekerja dengan Anda</h5>
          </div>
          <div className="main-content__header__right">
            <Search placeholder="Cari Driver"/>
            <Button type='primary' onClick={ handleClick } suffix={ <PlusOutlined /> }>
              Tambah Driver 
            </Button>
          </div>
        </div>
        <div className="main-content__body">
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PageDriver;