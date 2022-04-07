import React from 'react';
import {render} from '@testing-library/react-native';

import { ThemeProvider } from 'styled-components/native';
import tema from '../../../global/estilos/cores';

import Usuarios from '.';

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
  it('Teste de renderização atual de Usuarios', () => {
    const {getByTestId} = render(
      <Usuarios dados={
        {
          id: 1,
          nome: 'teste',
          cpf: '12345678945',
          telefone: '12345678912',
        }
      } />,
      {
        wrapper: Provedores
      }
    );

    const containerUsuarios= getByTestId('container-usuarios');

    expect(containerUsuarios).toBeTruthy();
  });
});