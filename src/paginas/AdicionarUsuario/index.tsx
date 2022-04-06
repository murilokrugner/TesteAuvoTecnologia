import React, {useState} from 'react';
import { Alert } from 'react-native';
import Input from '../../componentes/Input';
import Botao from '../../componentes/Botao';

import { Container, ContainerFormulario } from './styles';

import validaNome from '../../funcoes/validacoes/validaNome';
import validaCpf from '../../funcoes/validacoes/validaCpf';
import validaTelefone from '../../funcoes/validacoes/validaTelefone';

import conexaoBanco from '../../servicos/conexaoBanco';
import { Usuario } from '../../entidades/usuario';
import { useNavigation } from '@react-navigation/native';

const AdicionarUsuario: React.FC = () => {
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
      
      const conexao = await conexaoBanco();

      const usuario = new Usuario();

      usuario.nome = nome;
      usuario.cpf = cpf;
      usuario.telefone = telefone;

      await conexao.manager.save(usuario);

      Alert.alert('Usuário cadastrado com sucesso!');

      setCarregar(false);

      await conexao.destroy();
      
      navegacao.goBack();    
    } catch (error) {      
      Alert.alert('Erro ao cadastrar usuário, tente novamente mais tarde');  
      console.log(error)    
      setCarregar(false);      
    }
  }

  return (
    <Container>
      <ContainerFormulario>
        <Input 
        setText={setNome} 
        placeholder="Nome"
        returnKeyType="next"
        
        />
        <Input 
        setText={setCpf} 
        placeholder="CPF"
        returnKeyType="next"
        
        />
        <Input 
        setText={setTelefone} 
        placeholder="Telefone"
        returnKeyType="next"
        
        />

        <Botao loading={carregar} onPress={validaFormulario}>Gravar</Botao>
      </ContainerFormulario>
    </Container>
  );
}

export default AdicionarUsuario;