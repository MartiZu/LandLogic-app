import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import PreferenceTool from './PreferenceTool';

// Mock the useRouter hook from next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({ push: jest.fn() })),
}));

describe('PreferenceTool component', () => {
  test('renders PreferenceTool component', async () => {
    const cookieHandlerMock = jest.fn();

    const { getByText, getByTestId } = render(<PreferenceTool cookieHandler={cookieHandlerMock} />);

    // Initial render assertions
    expect(getByText(/Which of the following best describes you?/i)).toBeInTheDocument();

    // Click on a button and check if it triggers the expected behavior
    fireEvent.click(getByTestId('remortgage-button'));

    // Ensure that cookieHandler is called with the correct arguments
    expect(cookieHandlerMock).toHaveBeenCalledWith('q1', 'a2');

    // Wait for asynchronous operations (e.g., router.push)
    await waitFor(() => {
      // Ensure that the component updates after the asynchronous operations
      expect(getByText(/How comfortable are you with mortgage terminology?/i)).toBeInTheDocument();
    });

    // Additional assertions as needed
  });
});
