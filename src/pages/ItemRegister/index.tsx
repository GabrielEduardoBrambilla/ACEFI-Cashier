import { Form } from '../../components/Form/index.js'
import { FC, useEffect, useState } from 'react'

import { Container } from './styles.js'
import { api } from '../../services/api.js'
import { Card } from '../../components/Card/index.js'
import { Navbar } from '../../components/Navbar/index.js'

interface ItemRegisterProps {}

export const ItemRegister: FC<ItemRegisterProps> = () => {
  const [response, setResponse] = useState([]) // State for storing items
  const fetchItems = () => {
    api
      .get('/produtos')
      .then(function (response) {
        setResponse(response.data) // Update items state with fetched data
        console.log(response.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }
  function handleItemRegister(data: FormData) {
    const nome = data.get('nome') as string
    const preco = data.get('preco') as string
    const file = data.get('selectedFile') as File

    console.log(preco)
    api
      .post('/produtos', {
        name: nome,
        price: preco
      })
      .then(function (response) {
        console.log('SUCESSFUL RESPONSE')
        console.log(response)
        fetchItems()
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  function handleItemDeletion(item: any) {
    const id = item.id
    api
      .delete(`/produtos/${id}`, {})
      .then(function (response) {
        console.log('SUCESSFUL RESPONSE')
        console.log(response)
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
        {response.map(item => (
          <Card
            onClick={() => handleItemDeletion(item)}
            deleteHover
            counter={item.id}
            key={item.id}
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
            input2Title="preco"
            formTitle="Registrar um novo Item"
            ActionButton="Registrar item"
          />
        </div>
      </div>
    </Container>
  )
}
