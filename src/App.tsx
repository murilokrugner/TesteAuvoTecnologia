import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';

import Rotas from './rotas';

import ConexaoBancoContexto from './contexto/conexaoBancoContexto';
import conexaoBanco from './servicos/conexaoBanco';

const App: React.FC = () => {
  const [conexao, setConexao] = useState(null);

  async function conectarBanco() {
    const conectar = await conexaoBanco();

    setConexao(conectar);
  }

  useEffect(() => {
    conectarBanco();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ConexaoBancoContexto.Provider value={conexao}>
        <Rotas />
      </ConexaoBancoContexto.Provider>
    </SafeAreaView>
  );
};

export default App;
