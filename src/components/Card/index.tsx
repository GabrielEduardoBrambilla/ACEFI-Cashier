import { FC } from 'react'
import { Container } from './styles'
import coca from '../../assets/react.svg'
interface CardProps {
  image?: string
  title: string
  price: GLfloat
}

export const Card: FC<CardProps> = ({ image, title, price }: CardProps) => {
  const formattedPrice = price.toFixed(2) // Format price with 2 decimal places

  return (
    <Container>
      {/* <span className="counter">1</span> */}
      <img src={image || coca} alt={image || 'imagem descritiva do item'} />
      <p className="title">{title}</p>
      <p className="price">R$ {formattedPrice}</p>
    </Container>
  )
}
