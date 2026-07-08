import { initializeTimes, updateTimes } from './reducers';
import { fetchAPI } from './api';

jest.mock('./api', () => ({
  fetchAPI: jest.fn(),
}));

describe('initializeTimes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('returns the result of fetchAPI', () => {
    const mockTimes = ['17:00', '18:00', '19:00'];
    fetchAPI.mockReturnValue(mockTimes);

    const result = initializeTimes();

    expect(result).toEqual(mockTimes);
    expect(fetchAPI).toHaveBeenCalledTimes(1);
  });

  test('calls fetchAPI with a Date object', () => {
    fetchAPI.mockReturnValue([]);
    initializeTimes();
    const arg = fetchAPI.mock.calls[0][0];
    expect(arg).toBeInstanceOf(Date);
  });
});

describe('updateTimes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const initialState = ['17:00', '18:00'];

  test('returns new times for UPDATE_TIMES action', () => {
    const newTimes = ['19:00', '20:00', '21:00'];
    const actionDate = new Date(2026, 6, 20);
    fetchAPI.mockReturnValue(newTimes);

    const result = updateTimes(initialState, {
      type: 'UPDATE_TIMES',
      date: actionDate,
    });

    expect(result).toEqual(newTimes);
    expect(fetchAPI).toHaveBeenCalledWith(actionDate);
  });

  test('returns current state for unknown action type', () => {
    const result = updateTimes(initialState, { type: 'UNKNOWN' });
    expect(result).toEqual(initialState);
    expect(fetchAPI).not.toHaveBeenCalled();
  });
});
