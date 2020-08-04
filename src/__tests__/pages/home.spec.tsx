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
  it('should not be possible to know the strength side if the request goes wrong', async () => {
    beforeEach(() => {
      mockedHistoryPush.mockClear();
    });

    const { getByText } = render(<Home />);

    const startButton = getByText('START');

    act(() => {
      fireEvent.click(startButton);
    });

    await waitFor(
      () => {
        expect(mockedHistoryPush).toHaveBeenCalledTimes(1);
      },
      { timeout: 4000 },
    );
  });

  it('should not be possible to know the strength side', async () => {
    beforeEach(() => {
      mockedHistoryPush.mockClear();
    });

    jest.mock('../../service/api', () => {
      return {
        get: () => {
          return new Promise(() => {
            throw new Error();
          });
        },
      };
    });
    const { getByText } = render(<Home />);

    const startButton = getByText('START');

    act(() => {
      fireEvent.click(startButton);
    });

    expect(mockedHistoryPush).not.toHaveBeenCalled();
  });
});
