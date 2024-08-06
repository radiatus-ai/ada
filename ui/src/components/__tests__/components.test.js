import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import FormInput from '../common/FormInput';

describe('FormInput Component', () => {
  test('renders a text field', () => {
    render(<FormInput type="text" label="Name" value="" onChange={() => {}} />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  });

  test('renders a password field with visibility toggle', () => {
    render(
      <FormInput
        type="password"
        label="Password"
        value=""
        onChange={() => {}}
      />
    );
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);
    expect(screen.getByLabelText(/password/i)).toHaveAttribute('type', 'text');
  });

  test('renders a select field', () => {
    const options = [{ name: 'Option 1', value: 'option1' }];
    render(
      <FormInput
        type="select"
        label="Select"
        value=""
        onChange={() => {}}
        options={options}
      />
    );
    expect(screen.getByLabelText(/select/i)).toBeInTheDocument();
  });
});
