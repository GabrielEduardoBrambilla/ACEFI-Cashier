import { FC } from 'react'
import { Container } from './styles'
import { BiSolidEditAlt } from 'react-icons/bi'
import { FaClone } from 'react-icons/fa'
import { useTheme } from 'styled-components'
// FaDiceD6
interface CardProps {
  title: string
  price: GLfloat
  deleteHover?: boolean
  counter?: number | string | null
  color: string
  onClick?: () => void
}

export const Card: FC<CardProps> = ({
  title,
  price,
  onClick,
  counter,
  color,
  deleteHover
}: CardProps) => {
  const formattedPrice = price.toFixed(2) // Format price with 2 decimal places
  const theme = useTheme()

  return (
    <Container deleteHover={deleteHover} onClick={onClick}>
      <span className="counter">{counter}</span>
      <div className="icon">
        <FaClone style={{ color: `#${color}` || theme.COLORS.HAPPY_GREEN }} />
      </div>
      <BiSolidEditAlt />
      <div className="text">
        <p className="title">{title}</p>
        <p className="price">R$ {formattedPrice}</p>
      </div>
    </Container>
  )
}
