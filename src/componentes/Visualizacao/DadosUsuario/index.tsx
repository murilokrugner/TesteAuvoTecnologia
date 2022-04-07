import React from 'react';

import {Container, ContainerDados, TituloDado, ValorDado} from './styles';
interface usuarioData {
  dados: {
    id: number;
    nome: string;
    cpf: string;
    telefone: string;
  };
}

const DadosUsuario: React.FC<usuarioData> = ({dados}) => {
  return (
    <Container testID="container-dados">
      <ContainerDados>
        <TituloDado>Código: </TituloDado>
        <ValorDado>{dados.id}</ValorDado>
      </ContainerDados>
      <ContainerDados>
        <TituloDado>Nome: </TituloDado>
        <ValorDado>{dados.nome}</ValorDado>
      </ContainerDados>
      <ContainerDados>
        <TituloDado>CPF: </TituloDado>
        <ValorDado>{dados.cpf}</ValorDado>
      </ContainerDados>
      <ContainerDados>
        <TituloDado>Telefone: </TituloDado>
        <ValorDado>{dados.telefone}</ValorDado>
      </ContainerDados>
    </Container>
  );
};

export default DadosUsuario;
