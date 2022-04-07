import React from 'react';
import {render} from '@testing-library/react-native';

import {ThemeProvider} from 'styled-components/native';
import tema from '../../global/estilos/cores';

import Input from '.';

const Provedores: React.FC = ({children}) => (
  <ThemeProvider theme={tema}>{children}</ThemeProvider>
);

describe('Input', () => {
  it('Teste de renderização atual do Input', () => {
    const {getByTestId} = render(
      <Input
        setText={() => {}}
        placeholder="teste"
        keyboardType="numeric"
        returnKeyType="next"
      />,
      {
        wrapper: Provedores,
      },
    );

    const containerInput = getByTestId('container-input');

    expect(containerInput).toBeTruthy();
  });
});
