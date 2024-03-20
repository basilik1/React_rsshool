import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CardItem from './CardItem';

const mockData = {
  name: 'Luke Skywalker',
  birth_year: '19BBY',
  height: '172',
  mass: '77',
};

describe('CardItem', () => {
  it('render character name', () => {
    render(<CardItem data={mockData} />);
    const name = screen.getByRole('heading', { name: mockData.name });
    expect(name).toBeInTheDocument();
    expect(name.textContent).toBe('Luke Skywalker');
  });
  it('render character height', () => {
    render(<CardItem data={mockData} />);
    const height = screen.getByText(/Height/i);
    expect(height).toBeInTheDocument();
    expect(height.textContent).toContain('172');
  });
  it('render character mass', () => {
    render(<CardItem data={mockData} />);
    const mass = screen.getByText(/Mass/i);
    expect(mass).toBeInTheDocument();
    expect(mass.textContent).toContain('77');
  });
  it('render character birth year', () => {
    render(<CardItem data={mockData} />);
    const year = screen.getByText(/Birth_year/i);
    expect(year).toBeInTheDocument();
    expect(year.textContent).toContain('19BBY');
  });
  it('render close button and closing card', async () => {
    render(<CardItem data={mockData} />);
    const closeBtn = screen.getByTestid('closeBtn');
    const cardItem = screen.getByTestid('cardItem');
    expect(closeBtn).toBeInTheDocument();
    userEvent.hover(closeBtn);
    userEvent.click(closeBtn);

    await vi.waitFor(() => {
      expect(cardItem).not.toBeInTheDocument();
    });
  });
});
