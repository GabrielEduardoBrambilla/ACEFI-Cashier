import { Card } from '../../components/Card'
import { Form } from '../../components/Form'
import { FC } from 'react'

interface TitleProps {}

export const SignIn: FC<TitleProps> = () => {
  return (
    <div className="flex justify-center  h-[100vh] bg-purple-700">
      <Form title="" />
      <Card />
    </div>
  )
}
