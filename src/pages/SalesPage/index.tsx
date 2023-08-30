import { FC, useEffect, useState } from 'react'
import { Container } from './styles.js'
import { Card } from '../../components/Card/index.js'
import { Navbar } from '../../components/Navbar/index.js'
import { api } from '../../services/api.js'

interface Item {
  quantity: number
  id: number
  user_id: number
  name: string
  price: number
  imageAddress: string
}

interface SalesPageProps {}

export const SalesPage: FC<SalesPageProps> = () => {
  const [itemsOrder, setItemsOrder] = useState<Item[]>([])
  const [receivedAmount, setReceivedAmount] = useState<number | ''>('')
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
  function handleAddItem(item: Item) {
    const existingItem = itemsOrder.find(orderItem => orderItem.id === item.id)

    if (existingItem) {
      // If the item already exists in itemsOrder, update its quantity
      const updatedItems = itemsOrder.map(orderItem =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      )
      setItemsOrder(updatedItems)
    } else {
      // If the item doesn't exist in itemsOrder, add it with quantity 1
      setItemsOrder(prevOrder => [...prevOrder, { ...item, quantity: 1 }])
    }
  }

  const handlePagoClick = async () => {
    setItemsOrder([])
    setReceivedAmount('')
    console.log(itemsOrder.id)
    // Send API request here using the data in itemsOrder and receivedAmount
    try {
      await api.post('/Order', {
        item_id: itemsOrder.id,
        quantity: itemsOrder.quantity
      })

      // Reset itemsOrder and receivedAmount after successful payment
    } catch (error) {
      console.error('Error making payment:', error)
    }
  }

  // Calculate the total price and quantity of items in itemsOrder array
  const totalPrice = itemsOrder.reduce(
    (total, orderItem) => total + orderItem.price * orderItem.quantity,
    0
  )
  const roundedTotalPrice = totalPrice.toFixed(2)

  const totalQuantity = itemsOrder.reduce(
    (total, orderItem) => total + orderItem.quantity,
    0
  )
  let changeAmount: string | React.ReactNode = ''
  if (receivedAmount !== '') {
    changeAmount = (receivedAmount - totalPrice).toFixed(2)
    if (changeAmount < 0) {
      changeAmount = ''
    }
  }
  useEffect(() => {
    fetchItems()
  }, [])
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
            {itemsOrder.map(orderItem => (
              <tr key={orderItem.id}>
                <td>{orderItem.name}</td>
                <td>{orderItem.quantity}</td>
                <td>{orderItem.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="order-info">
          <table>
            <tbody>
              <tr>
                <th>Total</th>
                <td>R$ {totalPrice.toFixed(2)}</td>
              </tr>
              <tr>
                <th>Recebido</th>
                <td>
                  <input
                    type="number"
                    value={receivedAmount}
                    onChange={e => setReceivedAmount(Number(e.target.value))}
                  />
                </td>
              </tr>
              <tr>
                <th>Troco</th>
                <td>R$ {changeAmount}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={handlePagoClick}>PAGO</button>
        </div>
      </div>
    </Container>
  )
}
