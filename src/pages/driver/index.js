import React, { useState } from 'react';
import MainLayout from '../../components/layouts/main';
import { PlusOutlined } from '@ant-design/icons'
import Button from '../../components/button';
import Search from '../../components/search';
import { DriverCard } from '../../components/card'

const driverList = [
  { id: 'KOB200', name: 'Dzulfan', phone: '082217441170', photo: 'https://miro.medium.com/max/3150/0*JiI_YyWUBGHpyiP6.', onTime: 75, schedule: ['Senin', 'Selasa'], status: 'active' },
  { id: 'KOB201', name: 'Fadli', phone: '082217441170', photo: 'data:image/jpeg;base64,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', onTime: 30, schedule: ['Senin', 'Selasa', 'Jumat', 'Sabtu', 'Minggu'], status: 'active' },
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
    if(value === '') setDriver(driverSource)
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