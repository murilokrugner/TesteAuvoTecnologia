import {cpf} from 'cpf-cnpj-validator';

function validaCpf(value: string) {
  const resultado = cpf.isValid(value);

  return resultado;
}

export default validaCpf;
