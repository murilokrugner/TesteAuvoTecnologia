import 'react-native-gesture-handler';
import {StatusBar, LogBox} from 'react-native';
import React from 'react';

import {ThemeProvider} from 'styled-components';

import tema from './global/estilos/cores';

import App from './App';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const index: React.FC = () => {
  return (
    <ThemeProvider theme={tema}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={tema.cores.primaria}
      />
      <App />
    </ThemeProvider>
  );
};

export default index;
