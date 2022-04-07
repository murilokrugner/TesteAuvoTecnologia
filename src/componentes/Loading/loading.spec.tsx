import React from 'react';
import {render} from '@testing-library/react-native';

import Loading from '.';

describe('Loading', () => {
  it('Teste de renderização atual do Loading', () => {
    const {getByTestId} = render(<Loading color="#000" size="small" />);

    const containerLoading = getByTestId('container-loading');

    expect(containerLoading).toBeTruthy();
  });
});
