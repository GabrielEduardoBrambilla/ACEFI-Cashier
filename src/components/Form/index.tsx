import { FC } from 'react'
import { Container } from './styles'

interface TitleProps {
  title: string
  subtitle?: string
  signUp?: boolean
  singIn?: boolean
  newProduct?: boolean
}

export const Form: FC<TitleProps> = (props: TitleProps) => {
  return (
    <Container>
      <div className="relative h-11 w-full min-w-[200px]">
        <input
          className="peer h-full w-full border-b-4 border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=" "
        />
        <label className="after:content[] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-4 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          E-mail
        </label>
      </div>
      <div className="relative h-11 w-full min-w-[200px]">
        <input
          className="peer h-full w-full border-b-4 border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=" "
        />
        <label className="after:content[] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-4 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Senha
        </label>
      </div>
      {!props.signUp && (
        <div className="relative h-11 w-full min-w-[200px]">
          <input
            className="peer h-full w-full border-b-4 border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
          />
          <label className="after:content[] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-4 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Senha
          </label>
        </div>
      )}
      <button>Registrar-se</button>
    </Container>
  )
}
