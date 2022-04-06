import React from 'react';
import {SafeAreaView} from 'react-native';
import Rotas from './rotas';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Rotas />
    </SafeAreaView>
  );
};

export default App;
