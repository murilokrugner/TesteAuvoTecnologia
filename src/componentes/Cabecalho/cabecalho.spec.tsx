import React from 'react';
import {render} from '@testing-library/react-native';

import { ThemeProvider } from 'styled-components/native';
import tema from '../../global/estilos/cores';

import Cabecalho from '.';

const Provedores: React.FC = ({ children }) => (
  <ThemeProvider theme={tema}>
    {children}
  </ThemeProvider>
);

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const nav = jest.requireActual('@react-navigation/native');
  return {
    ...nav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('Cabecalho', () => {
  it('Teste de renderização atual do Cabecalho', () => {
    const {getByTestId} = render(
      <Cabecalho titulo="teste"/>,
      {
        wrapper: Provedores
      }
    );

    const containerCabecalho = getByTestId('container-cabecalho');

    expect(containerCabecalho).toBeTruthy();
  });
});