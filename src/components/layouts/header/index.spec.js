import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MainHeader from '.'

describe('Render Header Correctly', () => {

  it('MainHeader Node in the Document', () => {
    const { container } = render(<MainHeader />)
    let Node = container.querySelector('.main-header')
    expect(Node).toBeInTheDocument();
  })

  it('Toggle Correctly', () => {

    let collapse = false
    const toggleSideBar = (v) => collapse = v

    let props = {
      collapse,
      toggleSideBar
    }
    
    const { container } = render(<MainHeader { ...props } />)
    let Node = container.querySelector('.main-header')
    let LeftNode = Node.firstElementChild
    let ToggleNode = LeftNode.firstElementChild

    expect(ToggleNode.className).toBe('toggle-sidebar');

    // doing fireEvent
    
  })

  it('Showing Header Icons Correctly', () => {})
  
  it('Showing User Profile Correctly', () => {})

})