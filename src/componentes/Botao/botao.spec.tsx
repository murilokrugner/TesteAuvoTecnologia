import React from 'react';
import {render} from '@testing-library/react-native';

import { ThemeProvider } from 'styled-components/native';
import tema from '../../global/estilos/cores';

import Botao from '.';

const Provedores: React.FC = ({ children }) => (
  <ThemeProvider theme={tema}>
    {children}
  </ThemeProvider>
);

describe('Botao', () => {
  it('Teste de renderização atual do Botao', () => {
    const {getByTestId} = render(
      <Botao loading={false}>Teste</Botao>,
      {
        wrapper: Provedores
      }
    );

    const containerButton = getByTestId('container-botao');

    expect(containerButton).toBeTruthy();
  });
});