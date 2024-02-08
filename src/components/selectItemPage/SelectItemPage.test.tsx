import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import SelectItemPage from './SelectItemPage';

describe('Header', () => {
  it('should render number of items on the page', () => {
    render(<SelectItemPage onChange={() => {}} value="" />);
    const selectedLimit = screen.getByRole('option', { name: '10' });
    expect(selectedLimit).toBeInTheDocument();
  });
});
