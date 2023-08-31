import { Form } from '../../components/Form/index.js'
import { FC } from 'react'
import logo from '../../assets/HOPIC.png'
import { Container } from './styles.js'
import { api } from '../../services/api.js'

interface SignUpProps {}

export const SignUp: FC<SignUpProps> = () => {
  console.log('SignIN')
  function handleSignUp(data: FormData) {
    const name = data.get('name') as string
    const email = data.get('email') as string
    const password = data.get('password') as string
    console.log(email)
    console.log(password)
    console.log(name)
    if (!name || !email || !password) {
      return alert('Preencha todos os campos!')
    }
    api
      .post('/signup', {
        name: name,
        email: email,
        password: password
      })
      .then(function (response) {
        console.log('SUCESSFUL RESPONSE')
        console.log(response)
      })
      .catch(function (error) {
        console.error(error)
      })
  }
  return (
    <Container className="flex justify-center  h-[100vh] bg-purple-700">
      <div className="logo-section">
        <img src={logo} alt="" />
        <div className="logo-text">
          <p> S</p>
          <p> T</p>
          <p> O</p>
          <p> R</p>
          <p> E</p>
        </div>
      </div>
      <div className="form-section">
        <Form onSubmit={handleSignUp} signUp ActionButton="Registrar-se" />
      </div>
    </Container>
  )
}
