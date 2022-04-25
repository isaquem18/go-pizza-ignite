import { Input } from '@components/Input';
import { StatusBar } from 'react-native';
import {
  Container
} from './styles';

export function SignIn () {

  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
      <Container>
        <Input 
          placeholder="E-mail"
          keyboardType='email-address'
          type="secondary" 
        />
        <Input 
          placeholder="Senha"
          keyboardType='default'
          secureTextEntry={true}
          type="secondary" 
        />
      </Container>
    </>
  )
}