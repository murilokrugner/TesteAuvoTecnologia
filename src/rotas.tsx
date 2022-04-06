import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PaginasApp from './roteador/PaginasApp';

export default function Routes() {
  return (
    <NavigationContainer independent={true}>
      <PaginasApp />
    </NavigationContainer>
  );
}
