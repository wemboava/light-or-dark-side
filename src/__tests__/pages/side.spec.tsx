import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';

import Side from '../../pages/side';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    useRouteMatch: () => ({
      path: '',
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

describe('Side Page', () => {
  it('should be possible to know the strength side', async () => {
    const { getByText } = render(<Side />);

    const chooseButton = getByText('choose your path again, Padawan');

    act(() => {
      fireEvent.click(chooseButton);
    });

    await waitFor(
      () => {
        expect(mockedHistoryPush).toHaveBeenCalledTimes(1);
      },
      { timeout: 3000 },
    );
  });

  it('should be possible to return to the home page', async () => {
    const { getByText } = render(<Side />);

    const backButton = getByText('back');

    act(() => {
      fireEvent.click(backButton);
    });

    expect(mockedHistoryPush).toHaveBeenCalledWith('/');
  });
});
