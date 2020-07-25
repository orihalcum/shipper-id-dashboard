import React from 'react';
import { render } from '@testing-library/react';
import Search from '.';

describe('Render Search Correctly', () => {

  let props = {
    size: 'md',  
    onChange: '', 
    placeholder: 'Cari Driver'
  }
  
  let Node = null;

  beforeEach(() => {
    const { container } = render(<Search { ...props } />)
    Node = container.querySelector('.search')
  });

  it('Search Node in the Document', () => {
    expect(Node).toBeInTheDocument();
  })

  it('Render with class correctly', () => {})

  it('Render placeholder correctly', () => {})

  it('Render icon correctly', () => {})
  
})