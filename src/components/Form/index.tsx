import { FC } from 'react'
import { FormContainer, Container } from './styles'
import { FiUpload } from 'react-icons/fi'
interface FormProps {
  onSubmit: () => void
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
  input2Title
}: FormProps) => {
  return (
    <Container>
      {waringMsn && (
        <div className="warning">
          <p>{waringMsn}</p>
        </div>
      )}
      <FormContainer product={newProduct}>
        {formTitle && <p className="formTitle">{formTitle}</p>}
        <div>
          <input placeholder={input1Title || 'E-mail'} />
        </div>

        <div>
          <input placeholder={input2Title || 'Senha'} />
        </div>
        {signUp && (
          <div>
            <input placeholder="Senha" />
          </div>
        )}

        {signIn && (
          <span className="newRegister">
            <a href="">Novo? Registre-se aqui!</a>
          </span>
        )}

        {newProduct && (
          <button className="uploadButton">
            {/* UploadIcon */}
            <FiUpload />
            Imagem representativa
          </button>
        )}

        <button>{ActionButton}</button>
      </FormContainer>
    </Container>
  )
}
