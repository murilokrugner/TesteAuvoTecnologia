import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {ContainerUsuario, NumeroUsuario, NomeUsuario} from './styles';

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
    <ContainerUsuario onPress={navegar} testID='container-usuarios'>
      <NumeroUsuario>{dados.id} -</NumeroUsuario>
      <NomeUsuario>{dados.nome}</NomeUsuario>
    </ContainerUsuario>
  );
};

export default Usuarios;
