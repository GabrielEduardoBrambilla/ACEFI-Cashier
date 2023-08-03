import { FC } from 'react'
import { Container } from './styles'
import coca from '../../assets/react.svg'
interface TitleProps {
  image?: string
}

export const Card: FC<TitleProps> = () => {
  return (
    <Container>
      <span className="counter">1</span>
      <img src={coca} alt="" />
      <p className="title">Refrigerante</p>
      <p className="price">R$ 5,00</p>
    </Container>
  )
}
