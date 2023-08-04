import { FC } from 'react'
import { Container } from './styles'
import coca from '../../assets/react.svg'
interface CardProps {
  image?: string
}

export const Card: FC<CardProps> = ({ image }: CardProps) => {
  return (
    <Container>
      <span className="counter">1</span>
      <img src={image || coca} alt="" />
      <p className="title">Refrigerante</p>
      <p className="price">R$ 5,00</p>
    </Container>
  )
}
