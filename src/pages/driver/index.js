import React, { useState } from 'react';
import MainLayout from '../../components/layouts/main';
import { PlusOutlined } from '@ant-design/icons'
import Button from '../../components/button';
import Search from '../../components/search';
import { DriverCard } from '../../components/card'
import PageTitle from '../../components/page-title';
import { driverList, driverListAdd } from './data'

const PageDriver = () => {

  // Define Page Title and Subtitle
  const page = {
    title: 'Driver Management',
    subtitle: 'Daftar Driver yang bekerja dengan Anda'
  }

  // Define Driver source list to display on driver list :
  // driverSource as source data for reference ( like from API )
  // drivers for display data ( duplicate data from driverSource with/without filtering )
  // index for control adding data from driverListAdd to driverList
  const [driverSource, setDriverSource] = useState(driverList)
  const [drivers, setDriver] = useState(driverList)
  const [index, setIndex] = useState(0)

  // Handle Click Button Add Driver
  // add data from driverListAdd to driverList one by one
  // add data controlled by index variable
  // generally, adding data will use pop-up to pick the data or direct to add page and create the data
  const handleClick = () => {
    if(index < driverListAdd.length) {
      let arr = driverSource
      arr.push(driverListAdd[index])
      setDriverSource(arr)
      setDriver(arr)
      setIndex(index + 1)
    }
  }

  // Handling Change Form Search
  // realtime filtering to driver list
  const handleChangeSearch = (value) => {
    if(value === '') setDriver(driverSource)
    setDriver(driverSource.filter(v => v.id.toLowerCase().includes(value.toLowerCase())))
  }

  return (
    <MainLayout>
      <div className="main-content">
        <div className="main-content__header">
          <div className="main-content__header__left">
            <PageTitle { ...page } />
          </div>
          <div className="main-content__header__right">
            <Search placeholder="Cari Driver" onChange={ handleChangeSearch } />
            <Button type='primary' onClick={ handleClick } suffix={ <PlusOutlined /> }>
              Tambah Driver 
            </Button>
          </div>
        </div>
        <div className="main-content__body" data-testid="driver-list">
          { drivers.map(v => <DriverCard key={ v.id } { ...v }/>) }
        </div>
      </div>
    </MainLayout>
  );
};

export default PageDriver;