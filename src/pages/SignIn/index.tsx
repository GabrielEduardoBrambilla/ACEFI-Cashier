import { Form } from '../../components/Form'
import { FC } from 'react'
import CapivaraOnLake from '../../assets/Cartoon.png'
import { Container } from './styles'

interface SignInProps {}

export const SignIn: FC<SignInProps> = () => {
  return (
    <Container className="flex justify-center  h-[100vh] bg-purple-700">
      <div>
        <p> CCS</p>
        <img src={CapivaraOnLake} alt="" />
      </div>
      <Form />
    </Container>
  )
}
