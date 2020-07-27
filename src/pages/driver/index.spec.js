import React from 'react'
import { Router } from 'react-router-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import PageDriver from '.';

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

beforeEach(() => {
  renderWithRouter(<PageDriver />) 
})

describe('should render the driver page correctly', () => {
  
  it('render title and subtitle correctly', () => {
    const title = screen.getByTestId('page-title')
    const subtitle = screen.getByTestId('page-subtitle')
    expect(title.innerHTML).toMatch('Driver Management')
    expect(subtitle.innerHTML).toMatch('Daftar Driver yang bekerja dengan Anda')
  })

  it('render search and button add correctly', () => {
    const button = screen.getByTestId('button-add-driver')
    expect(button).toBeInTheDocument()
    expect(button.innerHTML).toMatch('Tambah Driver')
    expect(screen.getByTestId('search')).toBeInTheDocument()
    expect(screen.getByTestId('search-input')).toBeInTheDocument()
  })

  it('render initial list driver correctly', () => {
    expect(screen.getByTestId('driver-list').childNodes).toHaveLength(6)
  })

  it('search driver and show list driver correctly', () => {
    const input = screen.getByTestId('search-input')
    fireEvent.change(input, { target: { value: 'KoB200' } })
    expect(input.value).toBe('KoB200')
    expect(screen.getByTestId('driver-list').childNodes).toHaveLength(1)
  })

  it('add +1 driver correctly', () => {
    fireEvent.click(screen.getByTestId('button-add-driver'))
    expect(screen.getByTestId('driver-list').childNodes).toHaveLength(7)
  })

})

