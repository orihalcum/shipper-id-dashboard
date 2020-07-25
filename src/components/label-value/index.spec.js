import React from 'react';
import { render } from '@testing-library/react';
import LableValue from '.';

describe('Render LableValue Correctly', () => {

  let props = {
    lable: 'Nama',
    value: 'Dzulfan'
  }
  
  let Node = null;

  beforeEach(() => {
    const { container } = render(<LableValue { ...props } />)
    Node = container.querySelector('.lable-value')
  });

  it('LableValue Node in the Document', () => {
    expect(Node).toBeInTheDocument();
  })

  it('Render lable and value Correctly', () => {
    let NodeLable = Node.childNodes[0]
    let NodeValue = Node.childNodes[1]
    
    expect(NodeLable).toBeInTheDocument();
    expect(NodeLable.className).toBe('lable-value__lable');
    expect(NodeLable.textContent).toBe('Nama');

    expect(NodeValue).toBeInTheDocument();
    expect(NodeValue.className).toBe('lable-value__value');
    expect(NodeValue.textContent).toBe('Dzulfan');
  })

})