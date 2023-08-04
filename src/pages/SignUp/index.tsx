import { Form } from '../../components/Form/index.js'
import { FC } from 'react'
import CapivaraOnLake from '../../assets/Cartoon.png'
import { Container } from './styles.js'
import { api } from '../../services/api.js'

interface SignUpProps {}

export const SignUp: FC<SignUpProps> = () => {
  function handleSignIn() {
    api.post('/api/sign')
  }

  return (
    <Container className="flex justify-center  h-[100vh] bg-purple-700">
      <div>
        <p> CCS</p>
        <img src={CapivaraOnLake} alt="" />
      </div>
      <div className="section-2">
        <Form singIn ActionButton="Login" />
      </div>
    </Container>
  )
}
