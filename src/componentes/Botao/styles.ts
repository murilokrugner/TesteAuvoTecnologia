import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 45px;
  width: 250px;
  background: ${({theme}) => theme.cores.texto};
  border-radius: 4px;
  align-items: center;
  justify-content: center;

  margin-top: 10px;
`;

export const Texto = styled.Text`
  color: ${({theme}) => theme.cores.primaria};
  font-size: 16px;
`;
