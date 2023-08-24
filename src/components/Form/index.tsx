import { FC, useState, ChangeEvent, FormEvent } from 'react'
import { FormContainer, Container } from './styles'
import { FiUpload } from 'react-icons/fi'

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

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
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
    <Container>
      {waringMsn && (
        <div className="warning">
          <p>{waringMsn}</p>
        </div>
      )}
      <FormContainer onSubmit={handleSubmit} product={newProduct}>
        {formTitle && <p className="formTitle">{formTitle}</p>}
        <div>
          <input
            name="email"
            placeholder={input1Title || 'E-mail'}
            value={data.get('email') as string}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <input
            name="password"
            placeholder={input2Title || 'Senha'}
            value={data.get('password') as string}
            onChange={handleInputChange}
          />
        </div>
        {signUp && (
          <div>
            <input
              name="nome"
              placeholder="Nome"
              value={data.get('nome') as string}
              onChange={handleInputChange}
            />
          </div>
        )}

        {signIn && (
          <span className="newRegister">
            <a href="">Novo? Registre-se aqui!</a>
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

        <button>{ActionButton}</button>
      </FormContainer>
    </Container>
  )
}
