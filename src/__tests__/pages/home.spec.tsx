import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';

import Home from '../../pages/home';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

jest.mock('../../service/api', () => {
  return {
    get: () => {
      return new Promise((resolve) => {
        return resolve({ side: 'dark' });
      });
    },
  };
});

describe('Home Page', () => {
  it('should be possible to know the strength side', async () => {
    const { getByText } = render(<Home />);

    const searchField = getByText('START');

    act(() => {
      fireEvent.click(searchField);
    });

    await waitFor(
      () => {
        expect(mockedHistoryPush).toHaveBeenCalledTimes(1);
      },
      { timeout: 3000 },
    );
  });
});
