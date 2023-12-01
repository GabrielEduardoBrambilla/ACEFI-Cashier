import { FC, useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { FormContainer, Container } from './styles'
import {
  IoCheckmarkCircleSharp,
  IoReturnUpBack,
  IoTrashBin
} from 'react-icons/io5'
// import { Link } from 'react-router-dom'
import { Modal } from '../Modal'

interface EditFormProps {
  onSubmit: (formData: FormData) => void
  handleItemDeletion: (item: any) => void
  newProduct?: boolean
  formTitle?: string
  ActionButton: string
  name: string
  price: number
  color: string
}

export const EditForm: FC<EditFormProps> = ({
  newProduct,
  formTitle,
  ActionButton,
  onSubmit,
  handleItemDeletion,
  name,
  color,
  price
}: EditFormProps) => {
  const [data] = useState(new FormData())
  const [ColorDisplay, setColorDisplay] = useState(color)
  const [nameState, setName] = useState(name)
  const [priceState, setPrice] = useState(price)
  const [isOpen, setIsOpen] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    onSubmit(data)
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    const price = parseFloat(value)

    switch (name) {
      case 'name':
        setName(value)
        break
      case 'price':
        setPrice(price)
        break
      case 'selectedColor':
        setColorDisplay(value)
        break
    }
    data.set(name, value)
    const color = data.get('selectedColor') as string
    if (color) setColorDisplay(color)
  }
  useEffect(() => {
    data.set('name', nameState)
    data.set('price', priceState.toString())
    data.set('selectedColor', ColorDisplay)
  }, [])

  // Function to toggle the isOpen state
  const toggleModal = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Container>
      <Modal isOpen={isOpen} onClose={toggleModal}>
        <p className="modal-text">Deseja mesmo excluir esse item?</p>
        <div className="modal-buttons">
          <IoReturnUpBack onClick={toggleModal} />
          <IoTrashBin onClick={handleItemDeletion} className="icon" />
        </div>
      </Modal>

      <FormContainer id="form" onSubmit={handleSubmit} product={newProduct}>
        {formTitle && <p className="formTitle">{formTitle}</p>}
        <div>
          <input
            name="name"
            type="text"
            value={nameState}
            placeholder="Nome"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            name="price"
            type="number"
            value={priceState}
            placeholder="Preço"
            onChange={handleInputChange}
          />
        </div>

        <div className="newProd">
          <input
            id="color_input"
            type="color"
            name="selectedColor"
            value={ColorDisplay}
            onChange={handleInputChange}
          />
          <label htmlFor="color_input">
            <p>{ColorDisplay ? ColorDisplay : 'Selecione um cor'}</p>
          </label>
        </div>
      </FormContainer>
      <div className="buttons">
        <IoTrashBin onClick={toggleModal} className="icon" />
        <button type="submit" form="form">
          {ActionButton}
        </button>
      </div>
    </Container>
  )
}
