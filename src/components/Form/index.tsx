import { FC, useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { FormContainer, Container } from './styles'
import { Link } from 'react-router-dom'

interface FormProps {
  onSubmit: (formData: FormData) => void
  signUp?: boolean
  newProduct?: boolean
  signIn?: boolean
  formTitle?: string
  warningMsg?: string
  ActionButton: string
  input1Title?: string
  input1Type?: string
  input2Title?: string
  input2Type?: string
}

export const Form: FC<FormProps> = ({
  signUp,
  newProduct,
  signIn,
  formTitle,
  warningMsg,
  ActionButton,
  input1Title,
  input2Title,
  input1Type,
  input2Type,
  onSubmit
}: FormProps) => {
  const [data] = useState(new FormData())
  const warningDisplay = warningMsg ? true : false
  const [ColorDisplay, setColorDisplay] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    onSubmit(data)
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    data.set(name, value)
    const color = data.get('selectedColor') as string
    if (color) setColorDisplay(color)
  }
  useEffect(() => {}, [data])

  return (
    <Container warning={warningDisplay}>
      <div className="warning">
        <p>{warningMsg}</p>
      </div>
      <FormContainer id="form" onSubmit={handleSubmit} product={newProduct}>
        {formTitle && <p className="formTitle">{formTitle}</p>}
        <div>
          <input
            name={input1Title || 'email'}
            type={input1Type || 'email'}
            placeholder={input1Title || 'E-mail'}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            name={input2Title || 'password'}
            type={input2Type || 'password'}
            placeholder={input2Title || 'Senha'}
            onChange={handleInputChange}
          />
        </div>
        {signUp && (
          <div>
            <input
              name="name"
              placeholder="Nome"
              onChange={handleInputChange}
            />
          </div>
        )}
        {signIn && (
          <p className="userOptions">
            <span className="newRegister">
              <Link to="/SignUp">Novo? Registre-se aqui!</Link>
            </span>
            <span className="newRegister">
              <Link to="/SignUp">Esqueci minha senha '-'</Link>
            </span>
          </p>
        )}
        {signUp && (
          <p className="userOptions">
            <span className="newRegister">
              <Link to="/">Registrado! Faça login aqui!</Link>
            </span>
            <span className="newRegister">
              <Link to="/SignUp">Verificar email</Link>
            </span>
          </p>
        )}

        {newProduct && (
          <div className="newProd">
            <input
              id="color_input"
              type="color"
              name="selectedColor"
              onChange={handleInputChange}
            />
            <label htmlFor="color_input">
              <p>{ColorDisplay ? ColorDisplay : 'Selecione um cor'}</p>
            </label>
          </div>
        )}
      </FormContainer>
      <button type="submit" form="form">
        {ActionButton}
      </button>
    </Container>
  )
}
