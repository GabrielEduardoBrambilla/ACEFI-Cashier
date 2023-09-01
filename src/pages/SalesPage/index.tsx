import { FC, useEffect, useState, useRef } from 'react'
import { Container } from './styles.js'
import { Card } from '../../components/Card/index.js'
import { Navbar } from '../../components/Navbar/index.js'
import { api } from '../../services/api.js'
import { toast } from 'react-toastify'

interface Item {
  quantity: number
  id: number
  user_id: number
  name: string
  price: number
  imageAddress: string
}

interface SalesPageProps {}
interface Item {
  id: number
  name: string
  price: number
}

export const SalesPage: FC<SalesPageProps> = () => {
  const [itemsOrder, setItemsOrder] = useState<Item[]>([])
  const [response, setResponse] = useState<Item[]>([])
  const [receivedAmount, setReceivedAmount] = useState<number | ''>('')
  let changeAmount: string = ''

  const receivedAmountRef = useRef<HTMLInputElement | null>(null) // Create a ref for the input field

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
  function handleAddItem(item_id: number) {
    const existingItem = itemsOrder.find(orderItem => orderItem.id === item_id)

    if (existingItem) {
      // If the item already exists in itemsOrder, update its quantity
      const updatedItems = itemsOrder.map(orderItem =>
        orderItem.id === item_id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      )
      setItemsOrder(updatedItems)
    } else {
      // If the item doesn't exist in itemsOrder, add it with quantity 1
      const newItem = response.find(item => item.id === item_id)
      if (newItem) {
        // Add the item with quantity 1 to the order
        setItemsOrder(prevOrder => [...prevOrder, { ...newItem, quantity: 1 }])
      }
    }
  }

  const handlePagoClick = async () => {
    // Create an array of JSON objects using map
    const requestJson = itemsOrder.map(item => {
      return {
        item_id: item.id,
        quantity: item.quantity
      }
    })

    try {
      // Send API request using the created JSON array
      await api.post('/Order', requestJson)

      // Reset itemsOrder and receivedAmount after successful payment
      setItemsOrder([])
      setReceivedAmount('')
      toast.success('Venda registrada', {
        position: 'bottom-left',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light'
      })
    } catch (error) {
      console.error('Error making payment:', error)
    }
  }

  // Calculate the total price and quantity of items in itemsOrder array
  const totalPrice = itemsOrder.reduce(
    (total, orderItem) => total + orderItem.price * orderItem.quantity,
    0
  )

  if (receivedAmount !== '') {
    changeAmount = (receivedAmount - totalPrice).toFixed(2)
    const numericChangeAmount = parseFloat(changeAmount) // Convert changeAmount to a number
    if (numericChangeAmount < 0) {
      changeAmount = ''
    }
  }
  function handleIncreaseQuantity(itemId: number) {
    const updatedItems = itemsOrder.map(orderItem =>
      orderItem.id === itemId
        ? { ...orderItem, quantity: orderItem.quantity + 1 }
        : orderItem
    )
    setItemsOrder(updatedItems)
  }

  function handleDecreaseQuantity(itemId: number) {
    const updatedItems = itemsOrder.map(orderItem =>
      orderItem.id === itemId && orderItem.quantity > 0
        ? { ...orderItem, quantity: orderItem.quantity - 1 }
        : orderItem
    )
    setItemsOrder(updatedItems.filter(orderItem => orderItem.quantity > 0))
  }

  useEffect(() => {
    // Fetch data when the component mounts
    fetchItems()

    // Add key press event listener when the component mounts
    const handleKeyPress = (event: KeyboardEvent) => {
      const keyNumber = parseInt(event.key)
      if (keyNumber >= 1 && keyNumber <= 9 && response[keyNumber - 1]) {
        const item_idToAdd = response[keyNumber - 1].id
        handleAddItem(item_idToAdd)
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [response])

  return (
    <Container>
      <div className="items-wrapper">
        {response.map((item, index) => (
          <div key={item.id} onClick={() => handleAddItem(item.id)}>
            <Card
              color="6A1670"
              counter={index < 9 ? index + 1 : null}
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
                <td>
                  <button onClick={() => handleDecreaseQuantity(orderItem.id)}>
                    -
                  </button>
                  {orderItem.quantity}
                  <button onClick={() => handleIncreaseQuantity(orderItem.id)}>
                    +
                  </button>
                </td>

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
                    ref={receivedAmountRef} // Attach the ref to the input field
                    type="number"
                    tabIndex={1} // Specify the tab order
                    value={receivedAmount}
                    onChange={e => setReceivedAmount(Number(e.target.value))}
                    onKeyPress={e => {
                      if (e.key === 'Enter') {
                        handlePagoClick() // Trigger form submission on Enter key press
                      }
                    }}
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
