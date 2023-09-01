import { FC, useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { FormContainer, Container } from './styles'
import { FiUpload } from 'react-icons/fi'
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
  input2Title?: string
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
  onSubmit
}: FormProps) => {
  const [data] = useState(new FormData())
  const warningDisplay = warningMsg ? true : false
  const [ColorDisplay, setColorDisplay] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    console.log(data)
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
            placeholder={input1Title || 'E-mail'}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            name={input2Title || 'password'}
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
          <span className="newRegister">
            <Link to="/SignUp">Novo? Registre-se aqui!</Link>
          </span>
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
