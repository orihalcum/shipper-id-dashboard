import React from 'react';
import LableValue from '../label-value';
import Avatar from '../avatar';
import { ProgressCircle } from '../progress'
import { ExclamationCircleOutlined, EllipsisOutlined } from '@ant-design/icons'

export const Card = ({ title, options, children }) => {
  return (
    <div className={ `card` }>
      <div className="card__head">
        <h4 className="card__head__title">{ title }</h4>
        <div className="card__head__options">
          <ExclamationCircleOutlined style={{ display: 'none' }}/>
          <EllipsisOutlined />
        </div>
      </div>
      <div className="card__body">
        { children }
      </div>
    </div>
  );
};

export const DriverCard = ({ id, photo = '/image-user.png', name, phone, schedule = [], onTime, status }) => {
  let title = <span>ID Driver <b>{ id }</b></span>
  let props = {
    title,
    status
  }
  return (
    <Card { ...props }>
      <div className="container">
        <div className="container__left">
          <Avatar url={ photo } alt={ name } />
          <LableValue lable="Nama Driver" value={ name } />
          <LableValue lable="Telepon" value={ phone } />
        </div>
        <div className="container__right">
          <ProgressCircle count={ onTime }/>
        </div>
      </div>
      <LableValue lable="Jadwal" value={ schedule.join(', ') } />
    </Card>
  )
}