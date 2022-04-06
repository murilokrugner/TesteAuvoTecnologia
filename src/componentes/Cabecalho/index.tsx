import React from 'react';
import {
  Container,
  ContainerCabecalho,
  TituloCabecalho,
  BotaoNovoCliente,
  ImagemBotaoNovoCliente
} from './styles';

import AddImagem from '../../imagens/add.png';
import { useNavigation } from '@react-navigation/native';

interface CabecalhoProps {
  titulo: string;
}

const Cabecalho: React.FC<CabecalhoProps> = ({
    titulo,
}) => {
  const navegacao = useNavigation();

  function navegar() {
    navegacao.navigate('AdicionarUsuario');
  }

  return (
    <Container>
      <ContainerCabecalho>
        <TituloCabecalho>{titulo}</TituloCabecalho>
      </ContainerCabecalho>

      <BotaoNovoCliente onPress={navegar}>
        <ImagemBotaoNovoCliente source={AddImagem} />
      </BotaoNovoCliente>
    </Container>
  );
};

export default Cabecalho;
