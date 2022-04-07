import styled from 'styled-components/native';

export const ContainerUsuario = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: auto;
  height: 60px;
`;

export const NumeroUsuario = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({theme}) => theme.cores.texto};
  margin-left: 20px;
`;

export const NomeUsuario = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.cores.texto};
  margin-left: 20px;
`;
