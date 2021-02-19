import { render, screen } from '@testing-library/react';
import React from 'react';
import Button from './Button';

describe('Button', () => {
  it('should render successfully', () => {
    expect(render(<Button />)).toBeTruthy();
  });

  it('should display children', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeTruthy();
  });
});
