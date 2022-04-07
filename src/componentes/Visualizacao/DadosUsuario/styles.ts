import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;

  padding: 20px;
`;

export const ContainerDados = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  height: auto;

  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TituloDado = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({theme}) => theme.cores.texto};
`;

export const ValorDado = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.cores.texto};
`;
