import { FC } from 'react'
import { Container } from './styles'
import { MdDeleteForever } from 'react-icons/md'

import coca from '../../assets/react.svg'
interface CardProps {
  image?: string
  title: string
  price: GLfloat
  deleteHover?: boolean
  counter?: number | null
  onClick?: () => void
}

export const Card: FC<CardProps> = ({
  image,
  title,
  price,
  onClick,
  counter,
  deleteHover
}: CardProps) => {
  const formattedPrice = price.toFixed(2) // Format price with 2 decimal places

  return (
    <Container deleteHover={deleteHover} onClick={onClick}>
      <span className="counter">{counter}</span>
      <img src={image || coca} alt={image || 'imagem descritiva do item'} />
      <MdDeleteForever />
      <p className="title">{title}</p>
      <p className="price">R$ {formattedPrice}</p>
    </Container>
  )
}
