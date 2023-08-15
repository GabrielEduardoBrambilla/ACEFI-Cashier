import { FC, useState } from 'react'
import { FormContainer, Container } from './styles'
import { FiUpload } from 'react-icons/fi'

interface FormProps {
  onSubmit: (formData: any) => void // You can define a generic type for formData if needed
  ActionButton: string
  waringMsn?: string
  formTitle?: string
  signUp?: boolean
  signIn?: boolean
  newProduct?: boolean
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
  const [data, setData] = useState({
    email: '',
    password: '',
    nome: '',
    selectedFile: null as File | null // Initialize the file data as null
    // Add more fields as needed
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSubmit(data)
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files && e.target.files[0]
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      setData(prevData => ({
        ...prevData,
        selectedFile: file // Update the selectedFile in the state
      }))
    } else {
      setData(prevData => ({
        ...prevData,
        selectedFile: null
      }))
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
            value={data.email}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <input
            name="password"
            placeholder={input2Title || 'Senha'}
            value={data.password}
            onChange={handleInputChange}
          />
        </div>
        {signUp && (
          <div>
            <input
              name="nome"
              placeholder="Nome"
              value={data.nome}
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
