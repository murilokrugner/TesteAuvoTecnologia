import React from 'react';

import {Container} from './styles';
import DadosUsuario from '../../componentes/Visualizacao/DadosUsuario';
import {useRoute} from '@react-navigation/native';

const VisualizarUsuario: React.FC = () => {
  const route = useRoute();

  const dados: object = route.params;

  return (
    <Container>
      <DadosUsuario dados={dados} />
    </Container>
  );
};

export default VisualizarUsuario;
