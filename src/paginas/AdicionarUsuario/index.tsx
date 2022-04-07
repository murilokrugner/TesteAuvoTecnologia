import React, {useState, useContext} from 'react';
import {Alert} from 'react-native';
import {Container, ContainerFormulario} from './styles';

import Input from '../../componentes/Input';
import Botao from '../../componentes/Botao';

import validaNome from '../../funcoes/validacoes/validaNome';
import validaCpf from '../../funcoes/validacoes/validaCpf';
import validaTelefone from '../../funcoes/validacoes/validaTelefone';

import conexaoBancoContexto from '../../contexto/conexaoBancoContexto';
import {Usuario} from '../../entidades/usuario';

import {useNavigation} from '@react-navigation/native';

const AdicionarUsuario: React.FC = () => {
  const conexao = useContext(conexaoBancoContexto);

  const navegacao = useNavigation();

  const [carregar, setCarregar] = useState(false);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');

  function validaFormulario() {
    if (!validaNome(nome)) {
      Alert.alert('Digite o nome completo!');
      return;
    }

    if (!validaCpf(cpf)) {
      Alert.alert('CPF Inválido!');
      return;
    }

    if (!validaTelefone(telefone)) {
      Alert.alert('CPF Inválido!');
      return;
    }

    gravaCliente();
  }

  async function gravaCliente() {
    try {
      setCarregar(true);

      const usuario = new Usuario();

      usuario.nome = nome;
      usuario.cpf = cpf;
      usuario.telefone = telefone;

      await conexao.manager.save(usuario);

      Alert.alert('Usuário cadastrado com sucesso!');

      setCarregar(false);

      navegacao.goBack();
    } catch (error) {
      Alert.alert('Erro ao cadastrar usuário, tente novamente mais tarde');
      console.log(error);
      setCarregar(false);
    }
  }

  return (
    <Container>
      <ContainerFormulario>
        <Input setText={setNome} placeholder="Nome" returnKeyType="next" />

        <Input
          setText={setCpf}
          placeholder="CPF"
          keyboardType="numeric"
          returnKeyType="next"
        />

        <Input
          setText={setTelefone}
          placeholder="Telefone"
          keyboardType="numeric"
          returnKeyType="send"
          onSubmitEditing={validaFormulario}
        />

        <Botao loading={carregar} onPress={validaFormulario}>
          Gravar
        </Botao>
      </ContainerFormulario>
    </Container>
  );
};

export default AdicionarUsuario;
