import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import tema from '../../global/estilos/cores';

import Inicio from '../../paginas/Inicio';
import AdicionarUsuario from '../../paginas/AdicionarUsuario';
import VisualizarUsuario from '../../paginas/VisualizarUsuario';

const Stack = createStackNavigator();

export default function PaginasApp() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: tema.cores.primaria},
        }}
        initialRouteName="Inicio">        
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AdicionarUsuario"
          component={AdicionarUsuario}
          options={{
            headerShown: true,
            headerBackTitle: 'Voltar',
            headerTintColor: `${tema.cores.texto}`,
            headerTitle: 'Adicionar Usuário'
          }}
        />
        <Stack.Screen
          name="VisualizarUsuario"
          component={VisualizarUsuario}
          options={{
            headerShown: true,
            headerBackTitle: 'Voltar',
            headerTintColor: `${tema.cores.texto}`,
            headerTitle: 'Visualizar Usuário'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
