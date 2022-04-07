import React from 'react';
import {render} from '@testing-library/react-native';

import Loading from '.';

describe('Line', () => {
  it('Current Loading rendering test', () => {
    const {getByTestId} = render(<Loading color="#000" size="small" />);

    const containerLine = getByTestId('container-line');

    expect(containerLine).toBeTruthy();
  });
});