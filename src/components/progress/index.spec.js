import React from 'react';
import { render } from '@testing-library/react';
import { ProgressCircle } from '.';

describe('Render ProgressCircle Correctly', () => {
  
  let Node = null;

  beforeEach(() => {
    const { container } = render(<ProgressCircle count="100" />)
    Node = container.querySelector('.progress--circle')
  });

  it('ProgressCircle Node in the Document', () => {
    expect(Node).toBeInTheDocument();
  })

  it('Render percentage correctly', () => {})
  
})