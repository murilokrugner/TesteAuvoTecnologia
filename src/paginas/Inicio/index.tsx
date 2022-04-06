import React, {useEffect, useState} from 'react';
import { Alert, FlatList } from 'react-native';
import { Container } from './styles';

import Cabecalho from '../../componentes/Cabecalho'
import Usuarios from '../../componentes/Listas/Usuarios';

import conexaoBanco from '../../servicos/conexaoBanco';
import { Usuario } from '../../entidades/usuario';

import Loading from '../../componentes/Loading';

import {withNavigationFocus} from '@react-navigation/compat';

interface usuarioData {
  id: number;
  nome: string;
  cpf: string;
  telefone: string;
}

const Inicio: React.FC = ({isFocused}) => {
  const [carregando, setCarregando] = useState(true);
  const [usuarios, setUsuarios] = useState<usuarioData[]>([]);

  async function carregaUsuarios() {
    try {
      setCarregando(true);

      const conexao = await conexaoBanco();

      const usuarios = conexao.getRepository(Usuario);

      const response = await usuarios.find();

      setUsuarios(response);

      setCarregando(false);

    } catch (error) {
      setCarregando(false);

      Alert.alert('Erro ao carregar os dados, tente novamente mais tarde');
    }
  }

  useEffect(() => {
    if (isFocused) {
      carregaUsuarios();
    }
  }, [isFocused]);

  return (
    <Container>
      <Cabecalho titulo="Lista de Usuários"/>

      {carregando ? (
        <Loading size="small" color="#000" />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={usuarios}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Usuarios dados={item} />
          )}
        />
      )}
    </Container>
  );
}

export default withNavigationFocus(Inicio);