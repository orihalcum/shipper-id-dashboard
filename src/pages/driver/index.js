import React, { useState } from 'react';
import MainLayout from '../../components/layouts/main';
import { PlusOutlined } from '@ant-design/icons'
import Button from '../../components/button';
import Search from '../../components/search';
import { DriverCard } from '../../components/card'

const driverList = [
  { id: 'KOB200', name: 'Dzulfan', phone: '082217441170', photo: '', onTime: 75, schedule: ['Senin', 'Selasa'], status: 'active' },
  { id: 'KOB201', name: 'Fadli', phone: '082217441170', photo: '', onTime: 30, schedule: ['Senin', 'Selasa', 'Jumat', 'Sabtu', 'Minggu'], status: 'active' },
  { id: 'KOB202', name: 'John', phone: '082217441170', photo: '', onTime: 100, schedule: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'], status: 'active' },
  { id: 'KOB203', name: 'Doe', phone: '082217441170', photo: '', onTime: 0, schedule: ['Sabtu', 'Minggu'], status: 'active' },
  { id: 'KOB204', name: 'John', phone: '082217441170', photo: '', onTime: 90, schedule: ['Senin', 'Selasa', 'Jumat', 'Sabtu', 'Minggu'], status: 'active' },
  { id: 'KOB205', name: 'Smith', phone: '082217441170', photo: '', onTime: 60, schedule: ['Senin', 'Selasa'], status: 'active' },
]

const driverListAdd = [
  { id: 'KOB206', name: 'Keith', phone: '082217441170', photo: '', onTime: 80, schedule: ['Senin', 'Selasa', 'Jumat', 'Sabtu', 'Minggu'], status: 'active' },
  { id: 'KOB207', name: 'Sam', phone: '082217441170', photo: '', onTime: 85, schedule: ['Senin', 'Selasa', 'Minggu'], status: 'active' },
]

const PageDriver = () => {

  const [driverSource, setDriverSource] = useState(driverList)
  const [drivers, setDriver] = useState(driverList)
  const [index, setIndex] = useState(0)

  const handleClick = () => {
    if(index < driverListAdd.length) {
      let arr = driverSource
      arr.push(driverListAdd[index])
      setDriverSource(arr)
      setDriver(arr)
      setIndex(index + 1)
    }
  }

  const handleChangeSearch = (value) => {
    if(value == '') setDriver(driverSource)
    setDriver(driverSource.filter(v => v.id.toLowerCase().includes(value.toLowerCase())))
  }

  return (
    <MainLayout>
      <div className="main-content">
        <div className="main-content__header">
          <div className="main-content__header__left">
            <h1 className="main-content__header__title">Driver Management</h1>
            <h5 className="main-content__header__subtitle">Daftar Driver yang bekerja dengan Anda</h5>
          </div>
          <div className="main-content__header__right">
            <Search placeholder="Cari Driver" onChange={ handleChangeSearch } />
            <Button type='primary' onClick={ handleClick } suffix={ <PlusOutlined /> }>
              Tambah Driver 
            </Button>
          </div>
        </div>
        <div className="main-content__body">
          { drivers.map(v => <DriverCard key={ v.id } { ...v }/>) }
        </div>
      </div>
    </MainLayout>
  );
};

export default PageDriver;