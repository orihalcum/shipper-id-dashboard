import React from 'react'
import { HomeOutlined, CalendarOutlined, FileDoneOutlined, CarOutlined, ShopOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons'

export const NAV_MENU = [
  { title: 'Beranda', icon: <HomeOutlined />, link: "/", active: false },
  { title: 'Pickup', icon: <CalendarOutlined />, link: "/pickup", active: false },
  { title: 'Order', icon: <FileDoneOutlined />, link: "/order", active: false },
  { title: 'Driver', icon: <CarOutlined />, link: "/driver", active: false },
  { title: 'Merchant', icon: <ShopOutlined />, link: "/merchant", active: false },
  { title: 'Laporan', icon: <PieChartOutlined />, link: "/laporan", active: false },
  { title: 'Profil', icon: <UserOutlined />, link: "/profil", active: false },
]