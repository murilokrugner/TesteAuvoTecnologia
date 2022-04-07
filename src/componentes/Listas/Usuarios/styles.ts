import styled from 'styled-components/native';

export const ContainerCliente = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: auto;
  height: 60px;
`;

export const NumeroCliente = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({theme}) => theme.cores.texto};
  margin-left: 20px;
`;

export const NomeCliente = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.cores.texto};
  margin-left: 20px;
`;
