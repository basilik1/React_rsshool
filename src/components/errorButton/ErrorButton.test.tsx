import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardItem from './ErrorButton';

describe('Error button', () => {
  it('should render Error button', () => {
    render(<CardItem onClick={() => {}} />);
    const error = screen.getByRole('button', { name: /Error/i });
    expect(error).toBeTruthy();
  });
});
