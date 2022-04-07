import {createConnection} from 'typeorm/browser';

import {Usuario} from '../../entidades/usuario';

export default function conexaoBanco() {
  return createConnection({
    type: 'react-native',
    database: 'test',
    location: 'default',
    logging: ['error', 'query', 'schema'],
    synchronize: true,
    entities: [Usuario],
  });
}
