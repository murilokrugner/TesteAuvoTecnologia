import React, {forwardRef} from 'react';
import {Container, TInput} from './styles';

interface InputProps {
  style: object;
  ref: string;
  setText: (value: string) => void;
}

const Input: React.FC<InputProps> = ({style, setText, ...rest}, ref) => {
  return (
    <Container style={style}>
      <TInput
        {...rest}
        ref={ref}
        onChangeText={text => setText(text)}
        defaultValue={''}
      />
    </Container>
  );
};

export default forwardRef(Input);
