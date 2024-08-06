import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import axios from 'axios';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProjectCreate from '../pages/ProjectCreate';

jest.mock('axios');

describe('ProjectCreate Page', () => {
  test('renders ProjectCreate form', () => {
    render(
      <Router>
        <SnackbarProvider>
          <ProjectCreate />
        </SnackbarProvider>
      </Router>
    );

    expect(screen.getByText(/create project/i)).toBeInTheDocument();
  });

  test('displays validation error when form is incomplete', () => {
    render(
      <Router>
        <SnackbarProvider>
          <ProjectCreate />
        </SnackbarProvider>
      </Router>
    );

    const submitButton = screen.getByRole('button', { name: /create/i });
    fireEvent.click(submitButton);
    expect(
      screen.getByText(/please fill out all required fields/i)
    ).toBeInTheDocument();
  });

  test('calls API and displays success message on successful form submission', async () => {
    axios.post.mockResolvedValue({});

    render(
      <Router>
        <SnackbarProvider>
          <ProjectCreate />
        </SnackbarProvider>
      </Router>
    );

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'Test Project' },
    });
    fireEvent.change(screen.getByLabelText(/path/i), {
      target: { value: '/path/to/project' },
    });
    fireEvent.change(screen.getByLabelText(/select provider/i), {
      target: { value: 'anthropic' },
    });
    fireEvent.change(screen.getByLabelText(/select provider model/i), {
      target: { value: 'claude-3-opus-20240229' },
    });

    fireEvent.click(screen.getByRole('button', { name: /create/i }));

    expect(
      await screen.findByText(/project created successfully/i)
    ).toBeInTheDocument();
  });
});
