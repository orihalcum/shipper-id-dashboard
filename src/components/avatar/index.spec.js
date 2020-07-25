import React from 'react';
import { render } from '@testing-library/react';
import Avatar from '.';

const NO_IMAGE = "/image-user.png"
const EXAMPLE_IMAGE = "https://miro.medium.com/max/3150/0*JiI_YyWUBGHpyiP6."

describe('Render Avatar Correctly', () => {

  let Node = null;
  beforeEach(() => {
    const { container } = render(<Avatar />)
    Node = container.querySelector('.avatar')
  });

  it('Avatar Wrapper Node in the Document', () => {
    expect(Node).toBeInTheDocument();
  })

  it('img Node in the Document', () => {
    expect(Node.firstElementChild).toBeInTheDocument();
    expect(Node.firstElementChild.className).toBe('avatar__img');
  })

  it('Render without Passing Image', () => {
    expect(Node.firstElementChild).toHaveAttribute('src', NO_IMAGE)
  })

  it('Render without Passing Image', () => {
    const { container } = render(<Avatar url={ EXAMPLE_IMAGE } />)
    let Node = container.querySelector('.avatar')
    expect(Node.firstElementChild).toHaveAttribute('src', EXAMPLE_IMAGE)
  })

})