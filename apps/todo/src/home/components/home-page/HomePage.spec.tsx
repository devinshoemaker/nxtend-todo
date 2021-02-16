import { render } from '@testing-library/react';
import React from 'react';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('should render successfully', () => {
    expect(render(<HomePage />)).toBeTruthy();
  });
});
