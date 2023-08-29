import React, { FC, useState } from 'react'
import { Container } from './styles.js'
import { FaStore, FaUserCircle } from 'react-icons/fa'
import { BsFiletypeXlsx } from 'react-icons/bs'
import { Card } from '../../components/Card/index.js'
import { Navbar } from '../../components/Navbar/index.js'
import { api } from '../../services/api.js'

interface Item {
  id: number
  user_id: number
  name: string
  price: number
  imageAddress: string
}

interface SalesPageProps {}

export const SalesPage: FC<SalesPageProps> = () => {
  const [itemsOrder, setItemsOrder] = useState<Item[]>([]) // Fixed the state type
  const response: Item[] = [
    {
      id: 1,
      user_id: 1,
      name: 'chocolate bar',
      price: 2.99,
      imageAddress: '1_chocolate-bar.jpg'
    },
    {
      id: 2,
      user_id: 1,
      name: 'apple',
      price: 1.25,
      imageAddress: '2_apple.jpg'
    },
    {
      id: 3,
      user_id: 1,
      name: 'popcorn',
      price: 3.5,
      imageAddress: '3_popcorn.jpg'
    },
    {
      id: 4,
      user_id: 1,
      name: 'soda',
      price: 1.99,
      imageAddress: '4_soda.jpg'
    },
    {
      id: 5,
      user_id: 1,
      name: 'chips',
      price: 2.75,
      imageAddress: '5_chips.jpg'
    },
    {
      id: 6,
      user_id: 1,
      name: 'orange',
      price: 0.99,
      imageAddress: '6_orange.jpg'
    },
    {
      id: 7,
      user_id: 1,
      name: 'candy',
      price: 0.75,
      imageAddress: '7_candy.jpg'
    },
    {
      id: 8,
      user_id: 1,
      name: 'water bottle',
      price: 1.49,
      imageAddress: '8_water-bottle.jpg'
    },
    {
      id: 9,
      user_id: 1,
      name: 'granola bar',
      price: 1.89,
      imageAddress: '9_granola-bar.jpg'
    },
    {
      id: 10,
      user_id: 1,
      name: 'cookie',
      price: 1.25,
      imageAddress: '210_cookie.jpg'
    },
    {
      id: 11,
      user_id: 1,
      name: 'pretzel',
      price: 1.75,
      imageAddress: '211_pretzel.jpg'
    },
    {
      id: 12,
      user_id: 1,
      name: 'banana',
      price: 0.75,
      imageAddress: '212_banana.jpg'
    },
    {
      id: 13,
      user_id: 1,
      name: 'gummy bears',
      price: 2.25,
      imageAddress: '213_gummy-bears.jpg'
    },
    {
      id: 14,
      user_id: 1,
      name: 'trail mix',
      price: 3.99,
      imageAddress: '214_trail-mix.jpg'
    },
    {
      id: 15,
      user_id: 1,
      name: 'yogurt',
      price: 2.49,
      imageAddress: '215_yogurt.jpg'
    },
    {
      id: 16,
      user_id: 1,
      name: 'caramel popcorn',
      price: 4.25,
      imageAddress: '216_caramel-popcorn.jpg'
    },
    {
      id: 17,
      user_id: 1,
      name: 'chocolate milk',
      price: 1.99,
      imageAddress: '217_chocolate-milk.jpg'
    },
    {
      id: 18,
      user_id: 1,
      name: 'crackers',
      price: 1.29,
      imageAddress: '218_crackers.jpg'
    },
    {
      id: 19,
      user_id: 1,
      name: 'pineapple',
      price: 1.99,
      imageAddress: '219_pineapple.jpg'
    },
    {
      id: 20,
      user_id: 1,
      name: 'chocolate',
      price: 2.75,
      imageAddress: '2_chocolate-chip-muffin.jpg'
    }
  ] // Your item data here

  function handleAddItem(item: Item) {
    setItemsOrder(prevOrder => [...prevOrder, item])
  }

  return (
    <Container>
      <div className="items-wrapper">
        {response.map(item => (
          <div key={item.id} onClick={() => handleAddItem(item)}>
            <Card
              counter={item.id}
              key={item.id}
              title={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>
      <div className="right-section">
        <Navbar store />
        <table className="order-items">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Quant</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {response.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>item_quant</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="order-info">
          <table>
            <tbody>
              <tr>
                <th>Total</th>
                <td>R$ 25,50</td>
              </tr>
              <tr>
                <th>Recebido</th>
                <td>
                  {/* <form action="">
                    <input type="number" />
                  </form> */}
                </td>
              </tr>
              <tr>
                <th>Troco</th>
                <td>R$ 74,50</td>
              </tr>
            </tbody>
          </table>
          <button>PAGO</button>
        </div>
      </div>
    </Container>
  )
}
