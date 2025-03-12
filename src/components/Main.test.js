// Import the functions to be tested
import { initializeTimes, updateTimes } from './Main'; // Adjust the import path as needed

// Mock the fetchAPI function
jest.mock('./Main', () => ({
  ...jest.requireActual('./Main'),
  fetchAPI: jest.fn(() => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])
}));

// Unit test for initializeTimes function
test('initializeTimes returns the correct expected value', () => {
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const times = initializeTimes();
  expect(times).toEqual(expectedTimes);
});

// Unit test for updateTimes function
test('updateTimes returns the same value that is provided in the state', () => {
  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const action = { type: 'updateTimes', date: '2025-03-05' }; // Example action
  const newState = updateTimes(initialState, action);
  expect(newState).toEqual(initialState);
});
