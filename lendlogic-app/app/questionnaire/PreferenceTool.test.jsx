import { render, fireEvent, waitFor } from '@testing-library/react';
import PreferenceTool from './PreferenceTool';
import { describe } from 'node:test';


async function resolvedComponent(Component, props) {
  const ComponentResolved = await Component(props);
  return () => ComponentResolved;
}

// Mock the useRouter hook from next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({ push: jest.fn() })),
}));

// mocking useState
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}))

describe('PreferenceTool component', () => {
  test('renders PreferenceTool component', async () => {
    const cookieHandlerMock = jest.fn();
    const PreferenceToolResolved = await resolvedComponent(PreferenceTool, cookieHandlerMock);
    render(<PreferenceToolResolved />);
    // Initial render assertions
    expect(screen.getByTestId("firstquestion")).toBeInTheDocument();
    // Click on a button and check if it triggers the expected behavior
    fireEvent.click(getByTestId('remortgage-button'));
    // Ensure that cookieHandler is called with the correct arguments
    expect(cookieHandlerMock).toHaveBeenCalledWith('q1', 'a2');
    // Wait for asynchronous operations (e.g., router.push)
    await waitFor(() => {
      // Ensure that the component updates after the asynchronous operations
      expect(screen.getByTestId("secondquestion")).toBeInTheDocument();
    });
    // Additional assertions as needed
  });
});