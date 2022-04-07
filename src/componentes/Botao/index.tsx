import React, {ReactNode} from 'react';
import {ActivityIndicator} from 'react-native';

import {Container, Texto} from './styles';
interface PropsButton {
  loading: boolean;
  children: ReactNode;
}

function Botao({children, loading, ...rest}: PropsButton) {
  return (
    <Container {...rest} testID="container-botao">
      {loading ? (
        <ActivityIndicator size="small" color={'#000'} />
      ) : (
        <Texto>{children}</Texto>
      )}
    </Container>
  );
}

export default Botao;
