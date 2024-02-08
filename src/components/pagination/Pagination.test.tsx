import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('should render pagination title', () => {
    render(<Pagination />);
    const titlePages = screen.getByText('Number of pages');
    expect(titlePages).toBeInTheDocument();
  });
});
