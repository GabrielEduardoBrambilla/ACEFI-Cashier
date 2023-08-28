import { Form } from '../../components/Form/index.js'
import { FC } from 'react'
import { Container } from './styles.js'
import { api } from '../../services/api.js'
import { Card } from '../../components/Card/index.js'
import { Navbar } from '../../components/Navbar/index.js'

interface ItemRegisterProps {}

export const ItemRegister: FC<ItemRegisterProps> = () => {
  const response = [
    {
      id: 1,
      user_id: 1,
      name: 'coca',
      price: 5.5,
      imageAddress: '1691005574253_coca-lata.jpg'
    },
    {
      id: 2,
      user_id: 1,
      name: 'nescal',
      price: 4,
      imageAddress: '1691005681144_nescau.jpg'
    },
    {
      id: 3,
      user_id: 1,
      name: 'pipoca',
      price: 5,
      imageAddress: '1691005691478_pippos.jpg'
    },
    {
      id: 1,
      user_id: 1,
      name: 'coca',
      price: 5.5,
      imageAddress: '1691005574253_coca-lata.jpg'
    },
    {
      id: 2,
      user_id: 1,
      name: 'nescal',
      price: 4,
      imageAddress: '1691005681144_nescau.jpg'
    },
    {
      id: 3,
      user_id: 1,
      name: 'pipoca',
      price: 5,
      imageAddress: '1691005691478_pippos.jpg'
    },
    {
      id: 1,
      user_id: 1,
      name: 'coca',
      price: 5.5,
      imageAddress: '1691005574253_coca-lata.jpg'
    },
    {
      id: 2,
      user_id: 1,
      name: 'nescal',
      price: 4,
      imageAddress: '1691005681144_nescau.jpg'
    },
    {
      id: 3,
      user_id: 1,
      name: 'pipoca',
      price: 5,
      imageAddress: '1691005691478_pippos.jpg'
    },
    {
      id: 1,
      user_id: 1,
      name: 'coca',
      price: 5.5,
      imageAddress: '1691005574253_coca-lata.jpg'
    },
    {
      id: 2,
      user_id: 1,
      name: 'nescal',
      price: 4,
      imageAddress: '1691005681144_nescau.jpg'
    },
    {
      id: 3,
      user_id: 1,
      name: 'pipoca',
      price: 5,
      imageAddress: '1691005691478_pippos.jpg'
    },
    {
      id: 1,
      user_id: 1,
      name: 'coca',
      price: 5.5,
      imageAddress: '1691005574253_coca-lata.jpg'
    },
    {
      id: 2,
      user_id: 1,
      name: 'nescal',
      price: 4,
      imageAddress: '1691005681144_nescau.jpg'
    },
    {
      id: 3,
      user_id: 1,
      name: 'pipoca',
      price: 5,
      imageAddress: '1691005691478_pippos.jpg'
    },
    {
      id: 1,
      user_id: 1,
      name: 'coca',
      price: 5.5,
      imageAddress: '1691005574253_coca-lata.jpg'
    },
    {
      id: 2,
      user_id: 1,
      name: 'nescal',
      price: 4,
      imageAddress: '1691005681144_nescau.jpg'
    },
    {
      id: 3,
      user_id: 1,
      name: 'pipoca',
      price: 5,
      imageAddress: '1691005691478_pippos.jpg'
    },
    {
      id: 1,
      user_id: 1,
      name: 'coca',
      price: 5.5,
      imageAddress: '1691005574253_coca-lata.jpg'
    },
    {
      id: 2,
      user_id: 1,
      name: 'nescal',
      price: 4,
      imageAddress: '1691005681144_nescau.jpg'
    },
    {
      id: 3,
      user_id: 1,
      name: 'pipoca',
      price: 5,
      imageAddress: '1691005691478_pippos.jpg'
    }
  ]

  function handleItemRegister(data: FormData) {
    const nome = data.get('nome') as string
    const preco = data.get('preco') as string
    const file = data.get('selectedFile') as File
    console.log(preco)
    api
      .post('/produtos', {
        data
      })
      .then(function (response) {
        console.log('SUCESSFUL RESPONSE')
        console.log(response)
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  return (
    <Container>
      <div className="items-wrapper">
        {response.map(item => (
          <Card key={item.id} title={item.name} price={item.price} />
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
