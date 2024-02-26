import { FC, useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { FormContainer, Container } from './styles'
import { IoReturnUpBack, IoTrashBin } from 'react-icons/io5'
// import { Link } from 'react-router-dom'
import { Modal } from '../Modal'
interface Item {
  id: number
  name: string
  price: number
  color: string
}
interface EditFormProps {
  onSubmit: (formData: FormData) => void
  handleItemDeletion: (item: any) => void
  newProduct?: boolean
  formTitle?: string
  ActionButton: string
  item: Item
  setEditItem: React.Dispatch<React.SetStateAction<Item | undefined>>
}

export const EditForm: FC<EditFormProps> = ({
  newProduct,
  formTitle,
  ActionButton,
  onSubmit,
  handleItemDeletion,
  item,
  setEditItem
}: EditFormProps) => {
  const [data] = useState(new FormData())
  const [colorState, setColorState] = useState(item.color)
  const [nameState, setName] = useState(item.name)
  const [priceState, setPrice] = useState(item.price)
  const [keySequence, setKeySequence] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    data.set('shortCut', keySequence.join(' + '))
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
        setColorState(value)
        break
    }
    data.set(name, value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault()
    // Add the pressed key to the key sequence
    setKeySequence([...keySequence, event.key])
  }

  const handleKeyUp = () => {
    // Reset the key sequence
    setKeySequence([])
  }

  useEffect(() => {
    data.set('name', nameState)
    data.set('price', priceState.toString())
    data.set('selectedColor', colorState)
    data.set('shortCut', keySequence.join(' + '))
  }, [])

  // Function to toggle the isOpen state
  const toggleModal = () => {
    setIsOpen(!isOpen)
  }
  const toggleForm = () => {
    setEditItem(undefined)
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
            value={`#${colorState}`}
            onChange={handleInputChange}
          />
          <label htmlFor="color_input">
            <p>{colorState ? colorState : 'Selecione um cor'}</p>
          </label>
        </div>
        <div>
          <input
            name="shortCut"
            id="shortCut"
            value={keySequence.join(' + ')}
            type="text"
            placeholder="ShortCut"
            onKeyDown={handleKeyDown}
            onClick={handleKeyUp}
            readOnly
          />
        </div>
      </FormContainer>
      <div className="buttons">
        <div className="actionsBtns">
          <IoReturnUpBack onClick={toggleForm} className="icon" />
          <IoTrashBin onClick={toggleModal} className="icon" />
        </div>
        <button type="submit" form="form">
          {ActionButton}
        </button>
      </div>
    </Container>
  )
}
