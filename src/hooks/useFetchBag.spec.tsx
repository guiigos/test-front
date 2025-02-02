import React from 'react';
import { screen, act } from '@testing-library/react';
import { customRender } from '_test/render';
import { useFetchBag } from './useFetchBag';

jest.mock('axios', () => ({
  default: {
    create: jest.fn,
    get: jest.fn,
  },
}));

const Component: React.FC = (): React.ReactElement => {
  const { isFetching } = useFetchBag();
  return <span>{isFetching.toString()}</span>;
};

describe('Hooks :: useFetchBag', () => {
  it('should be create service fetch', async () => {
    await act(async () => customRender(<Component />));

    const fetching = screen.getByText(/true/i);
    expect(fetching).toBeInTheDocument();
  });
});
