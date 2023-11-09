import { Form } from '../../components/Form/index.js'
import { FC, useEffect, useState } from 'react'

import { Container } from './styles.js'
import { api } from '../../services/api.js'
import { Card } from '../../components/Card/index.js'
import { Navbar } from '../../components/Navbar/index.js'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

interface ItemEditor {}
interface Item {
  id: number
  name: string
  price: number
  color: string
}

export const ItemEditor: FC<ItemEditor> = () => {
  const [response, setResponse] = useState<Item[]>([])
  const navigate = useNavigate()
  const { id } = useParams() // Extracts the 'id' parameter from the URL
  console.log(id)
  console.log(id)
  console.log(id)
  console.log(id)
  console.log(id)
  console.log(id)
  const fetchItems = () => {
    api
      .get('/produtos')
      .then(function (response) {
        setResponse(response.data) // Update items state with fetched data
      })
      .catch(function (error) {
        console.error(error)
      })
  }
  function handleItemRegister(data: FormData) {
    const nome = data.get('nome') as string
    const preco = data.get('preco') as string
    const color = data.get('selectedColor') as string

    if (!nome) {
      toast.error('Nome é obrigatório', {
        position: 'bottom-left',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light'
      })
      return // Exit the function to prevent further execution
    }

    if (!preco) {
      toast.error('Preço é obrigatório', {
        position: 'bottom-left',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light'
      })
      return // Exit the function to prevent further execution
    }
    if (!color) {
      toast.error('Cor é obrigatória', {
        position: 'bottom-left',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light'
      })
      return // Exit the function to prevent further execution
    }
    const colorWithoutHash = color.substring(1) // Remove the "#" symbol

    api
      .post('/produtos', {
        name: nome,
        price: preco,
        color: colorWithoutHash
      })
      .then(function () {
        toast.success('Item registrado com sucesso', {
          position: 'bottom-left',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'light'
        })
        fetchItems()
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <Container>
      <div className="items-wrapper">
        {response.map((item, index) => (
          <Card
            onClick={() => {
              navigate('/loja')
            }}
            deleteHover
            counter={index < 9 ? index + 1 : null}
            key={item.id}
            // color="0B3B7A"
            color={item.color}
            title={item.name}
            price={item.price}
          />
        ))}
      </div>
      <div className="right-section">
        <Navbar />

        <div className="form-wrapper">
          <Form
            onSubmit={handleItemRegister}
            newProduct
            input1Title="nome"
            input1Type="text"
            input2Title="preco"
            input2Type="number"
            formTitle="Registrar um novo Item"
            ActionButton="Registrar item"
          />
        </div>
      </div>
    </Container>
  )
}
