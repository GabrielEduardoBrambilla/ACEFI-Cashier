import { FC } from 'react'
import {
  FormContainer,
  Container,
  StyledInputWrapper,
  StyledInput
} from './styles'

interface FormProps {
  onSubmit: () => void
  ActionButton: string
  waringMsn?: string
  formTitle?: string
  signUp?: boolean
  signIn?: boolean
  newProduct?: boolean
}

export const Form: FC<FormProps> = ({
  signUp,
  newProduct,
  signIn,
  formTitle,
  waringMsn,
  ActionButton
}: FormProps) => {
  return (
    <Container>
      {waringMsn && (
        <div className="warning">
          <p>{waringMsn}</p>
        </div>
      )}
      <FormContainer>
        {formTitle && <p>{formTitle}</p>}
        <StyledInputWrapper>
          <StyledInput placeholder="E-mail" />
        </StyledInputWrapper>

        <StyledInputWrapper>
          <StyledInput placeholder="Senha" />
        </StyledInputWrapper>
        {signUp && (
          <StyledInputWrapper>
            <StyledInput placeholder="Senha" />
          </StyledInputWrapper>
        )}

        {signIn && (
          <span className="newRegister">
            <a href="">Novo? Registre-se aqui!</a>
          </span>
        )}

        {newProduct && (
          <button>
            {/* UploadIcon */}
            Imagem representativa
          </button>
        )}

        <button>{ActionButton}</button>
      </FormContainer>
    </Container>
  )
}
