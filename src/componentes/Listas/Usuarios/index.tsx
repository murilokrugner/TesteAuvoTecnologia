import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {ContainerCliente, NumeroCliente, NomeCliente} from './styles';

interface usuarioData {
  dados: {
    id: number;
    nome: string;
    cpf: string;
    telefone: string;
  };
}

const Usuarios: React.FC<usuarioData> = ({dados}) => {
  const navegacao = useNavigation();

  function navegar() {
    navegacao.navigate('VisualizarUsuario', dados);
  }

  return (
    <ContainerCliente onPress={navegar}>
      <NumeroCliente>{dados.id} -</NumeroCliente>
      <NomeCliente>{dados.nome}</NomeCliente>
    </ContainerCliente>
  );
};

export default Usuarios;
