import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import History from './History';

jest.mock('axios');

describe('History component', () => {
  test('renders loading spinner while fetching history', () => {
    render(<History chatId="123" refreshHistory={false} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  test('renders history messages after fetching data', async () => {
    const mockData = [
      { role: 'user', content: 'Hello' },
      { role: 'system', content: 'Hi there!' },
    ];
    axios.get.mockResolvedValueOnce({ data: mockData });

    render(<History chatId="123" refreshHistory={false} />);
    expect(await screen.findByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('Hi there!')).toBeInTheDocument();
  });

  test('updates file when Update File button is clicked', async () => {
    const mockData = [
      { role: 'system', content: '```javascript\nconsole.log("Hello");\n```' },
    ];
    axios.get.mockResolvedValueOnce({ data: mockData });
    axios.post.mockResolvedValueOnce();

    render(<History chatId="123" refreshHistory={false} />);
    const updateButton = await screen.findByText('Update File');
    updateButton.click();
    expect(axios.post).toHaveBeenCalledWith('http://localhost:8000/edit', {
      content: 'console.log("Hello");',
    });
  });
});
