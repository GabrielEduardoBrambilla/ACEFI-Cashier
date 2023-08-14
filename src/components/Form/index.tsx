import { FC, useState } from 'react'
import { FormContainer, Container } from './styles'
import { FiUpload } from 'react-icons/fi'
interface FormProps {
  onSubmit:
    | ((email: string, password: string) => void) // Sign-in scenario
    | ((arg1: any, arg2: any) => void)
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
  const [data, setData] = useState([])
  const [email, setEmail] = useState('')
  const [confirmationPassword, setConfirmationPassword] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [password, setPassword] = useState('')

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault() // Prevent the default form submission behavior

    onSubmit(email, password)
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files && e.target.files[0]
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      setSelectedFile(file)
    } else {
      setSelectedFile(null)
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
            placeholder={input1Title || 'E-mail'}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            placeholder={input2Title || 'Senha'}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {signUp && (
          <div>
            <input
              placeholder="Senha"
              onChange={e => setConfirmationPassword(e.target.value)}
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
              placeholder="Imagem representativa"
              onChange={handleFileChange}
            />
          </label>
        )}

        <button>{ActionButton}</button>
      </FormContainer>
    </Container>
  )
}
