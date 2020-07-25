import React from 'react'
import { Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import PageDriver from '.';
import Search from '../../components/search';

const renderWithRouter = (component) => {
  const history = createMemoryHistory()
    return { 
    ...render (
    <Router history={history}>
      {component}
    </Router>
    )
  }
}

describe('should render the driver page correctly', () => {
  
  it('render title and subtitle correctly', () => {
    const { getByTestId } = renderWithRouter(<PageDriver />) 
    const title = getByTestId('page-title')
    const subtitle = getByTestId('page-subtitle')

    expect(title.innerHTML).toMatch('Driver Management')
    expect(subtitle.innerHTML).toMatch('Daftar Driver yang bekerja dengan Anda')
  })

  it('render search and button add correctly', () => {})

  it('render list driver correctly', () => {})

  it('search driver and show list driver correctly', () => {})

  it('add driver correctly', () => {})

})

