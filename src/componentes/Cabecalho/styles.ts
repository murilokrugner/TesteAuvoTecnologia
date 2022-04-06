import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100px;
`;

export const ContainerCabecalho = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: auto;
  height: 100px;
`;

export const TituloCabecalho = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;
  color: ${({theme}) => theme.cores.texto};
`;

export const BotaoNovoCliente = styled.TouchableOpacity`
  width: 32px;
  height: 32px;

  margin-right: 20px;
`;

export const ImagemBotaoNovoCliente = styled.Image`
  width: 32px;
  height: 32px;
`;