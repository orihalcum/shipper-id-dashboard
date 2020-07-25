import React from 'react';
import { render } from '@testing-library/react';
import LabelValue from '.';

describe('Render LabelValue Correctly', () => {

  let props = {
    label: 'Nama',
    value: 'Dzulfan'
  }
  
  let Node = null;

  beforeEach(() => {
    const { container } = render(<LabelValue { ...props } />)
    Node = container.querySelector('.label-value')
  });

  it('LabelValue Node in the Document', () => {
    expect(Node).toBeInTheDocument();
  })

  it('Render label and value Correctly', () => {
    let NodeLabel = Node.childNodes[0]
    let NodeValue = Node.childNodes[1]
    
    expect(NodeLabel).toBeInTheDocument();
    expect(NodeLabel.className).toBe('label-value__label');
    expect(NodeLabel.textContent).toBe('Nama');

    expect(NodeValue).toBeInTheDocument();
    expect(NodeValue.className).toBe('label-value__value');
    expect(NodeValue.textContent).toBe('Dzulfan');
  })

})