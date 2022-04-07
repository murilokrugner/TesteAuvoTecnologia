import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Container} from './styles';
interface loadingProps {
  color: string;
  size?: number | 'small' | 'large' | undefined;
}

const Loading: React.FC<loadingProps> = ({color, size}) => {
  return (
    <Container testID="container-loading">
      <ActivityIndicator color={color} size={size} />
    </Container>
  );
};

export default Loading;
