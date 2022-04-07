import {Entity, PrimaryGeneratedColumn, ManyToOne} from 'typeorm/browser';

import {Usuario} from './usuario';

@Entity('post')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => type, usuario => usuario.posts, {
    cascade: ['insert'],
  })
  usuario: Usuario;
}
