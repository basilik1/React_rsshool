import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('should render the  button search', () => {
    render(
      <Header
        onChange={() => {}}
        errorClick={() => {}}
        onSelectChange={() => {}}
        onSubmit={() => {}}
        limitValue=""
        value=""
      />
    );
    const name = screen.getByRole('button', { name: 'Search' });
    expect(name).toBeInTheDocument();
  });
  it('should render the input value', () => {
    render(
      <Header
        onChange={() => {}}
        errorClick={() => {}}
        onSelectChange={() => {}}
        onSubmit={() => {}}
        limitValue=""
        value="Luke"
      />
    );
    const input = screen.getByDisplayValue('Luke');
    expect(input).toBeInTheDocument();
  });
});
