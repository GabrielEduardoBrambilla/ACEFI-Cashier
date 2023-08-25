import { FC, useState, ChangeEvent, FormEvent } from 'react'
import { FormContainer, Container } from './styles'
import { FiUpload } from 'react-icons/fi'
import { Link } from 'react-router-dom'

interface FormProps {
  onSubmit: (formData: FormData) => void
  signUp?: boolean
  newProduct?: boolean
  signIn?: boolean
  formTitle?: string
  waringMsn?: string
  ActionButton: string
  input1Title?: string
  input2Title?: string
}

export const Form: FC<FormProps> = ({
  signUp,
  newProduct,
  signIn,
  formTitle,
  waringMsn,
  ActionButton,
  input1Title,
  input2Title,
  onSubmit
}: FormProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(new FormData())
  const warningDisplay = waringMsn ? true : false

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    console.log(data)
    onSubmit(data)
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    data.set(name, value)
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files && e.target.files[0]
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      data.set('selectedFile', file)
    }
  }

  return (
    <Container warning={warningDisplay}>
      <div className="warning">
        <p>{waringMsn}</p>
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
          <label className="uploadButton">
            <FiUpload />
            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              name="selectedFile"
              onChange={handleFileChange}
            />
            Imagem Representativa
          </label>
        )}
      </FormContainer>
      <button type="submit" form="form">
        {ActionButton}
      </button>
    </Container>
  )
}
