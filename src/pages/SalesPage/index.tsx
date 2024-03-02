import { FC, useEffect, useState, useRef } from 'react'
import { Container } from './styles.js'
import { Card } from '../../components/Card/index.js'
import { Navbar } from '../../components/Navbar/index.js'
import { api } from '../../services/api.js'
import { toast } from 'react-toastify'

interface Item {
  quantity: number
  user_id: number
  id: number
  name: string
  price: number
  color: string // Added the color property
  imageAddress: null // Added the color property
  shortCut: string[] // Added the color property
}

interface SalesPageProps {}

export const SalesPage: FC<SalesPageProps> = () => {
  const [itemsOrder, setItemsOrder] = useState<Item[]>([])
  const [response, setResponse] = useState<Item[]>([])
  const [receivedAmount, setReceivedAmount] = useState<string>('')
  const [isInReceivedInput, setIsInReceivedInput] = useState(false)
  const [keySequence, setKeySequence] = useState<string[]>([])
  let changeAmount: string = ''

  const receivedAmountRef = useRef<HTMLInputElement | null>(null)

  const fetchItems = () => {
    // api
    //   .get('/produtos')
    //   .then(function (response) {
    //     setResponse(response.data)
    //   })
    //   .catch(function (error) {
    //     console.error(error)
    //   })
    setResponse([
      {
        id: 87,
        user_id: 1,
        name: 'Coca',
        price: 5,
        quantity: 0,
        color: 'df1616',
        imageAddress: null,
        shortCut: ['1']
      },

      {
        id: 88,
        user_id: 1,
        name: 'Sushi',
        price: 50,
        quantity: 0,
        color: 'bf36b4',
        imageAddress: null,
        shortCut: ['Shift', ' S']
      },
      {
        id: 888,
        user_id: 1,
        name: 'Tost',
        price: 35,
        quantity: 0,
        color: 'bf86b4',
        imageAddress: null,
        shortCut: ['s']
      },
      {
        id: 89,
        quantity: 0,
        user_id: 1,
        name: 'Bola',
        price: 5,
        color: '1032e0',
        imageAddress: null,
        shortCut: ['Shift', 'F']
      },
      {
        id: 111,
        user_id: 1,
        name: 'computador',
        price: 12,
        color: '9c4f4f',
        imageAddress: null,
        quantity: 0,
        shortCut: ['Shift', 'A']
      },

      {
        id: 131,
        user_id: 1,
        name: 'Cralos',
        price: 5,
        color: 'df2020',
        imageAddress: null,
        quantity: 0,
        shortCut: ['Shift', 'D']
      },
      {
        id: 132,
        user_id: 1,
        name: 'Cralos',
        price: 5,
        color: 'df2020',
        quantity: 0,
        imageAddress: null,
        shortCut: ['Shift', 'C']
      },
      {
        id: 133,
        user_id: 1,
        name: 'Cralos',
        price: 5,
        quantity: 0,
        color: 'df2020',
        imageAddress: null,
        shortCut: ['Shift', 'G']
      },
      {
        id: 134,
        user_id: 1,
        name: 'Vitor',
        price: 5,
        quantity: 0,
        color: 'df2020',
        imageAddress: null,
        shortCut: ['Shift', 'B']
      }
    ])
  }
  function handleAddItem(item_id: number) {
    const existingItem = itemsOrder.find(orderItem => orderItem.id === item_id)

    if (existingItem) {
      handleIncreaseQuantity(item_id)
      setKeySequence([])
    } else {
      const newItem = response.find(item => item.id === item_id)
      if (newItem) {
        setItemsOrder(prevOrder => [...prevOrder, { ...newItem, quantity: 1 }])
        setKeySequence([])
      }
    }
  }

  const handlePagoClick = async () => {
    if (itemsOrder.length === 0) {
      toast.warn('Sem itens na comanda', {
        position: 'bottom-left',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light'
      })
      return
    }
    const requestJson = itemsOrder.map(item => {
      return {
        item_id: item.id,
        quantity: item.quantity
      }
    })

    try {
      await api.post('/Order', requestJson)

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
      toast.error(`Error: ${error}`, {
        position: 'bottom-left',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light'
      })
    }
    if (receivedAmountRef.current) {
      receivedAmountRef.current.blur()
    }
  }

  const totalPrice = itemsOrder.reduce(
    (total, orderItem) => total + orderItem.price * orderItem.quantity,
    0
  )

  if (receivedAmount !== '') {
    changeAmount = (parseFloat(receivedAmount) - totalPrice).toFixed(2)
    if (parseFloat(changeAmount) < 0) {
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
    const handleKeyDown = (event: KeyboardEvent) => {
      event.preventDefault()

      const itemsWithPressedKey = response.filter(item => {
        return item.shortCut.includes(event.key)
      })

      for (const item of itemsWithPressedKey) {
        const { shortCut, id } = item
        const pressedKeys = shortCut.map(key => key.toLowerCase())
        const pressedKeyIndex = pressedKeys.indexOf(event.key.toLowerCase())
        if (shortCut.length > 1) {
          const nextKey = pressedKeys[pressedKeyIndex + 1]
          console.log('Chegou quase la')
          if (
            pressedKeys.slice(pressedKeyIndex + 1).every((key, index) => {
              const nextEventKey = index === 0 ? nextKey : shortCut[index + 1]
              const nextEventKeyLower = nextEventKey.toLowerCase()
              const isModifier = ['shift', 'ctrl', 'alt'].includes(key)
              const isPressed = isModifier
                ? event.getModifierState(key)
                : event.key.toLowerCase() === nextEventKeyLower
              return isPressed
            })
          ) {
            console.log('Chegou la')
            handleAddItem(id)
            event.preventDefault() // Prevent default browser behavior for the shortcut keys
          }
        } else {
          if (shortCut[0].toLowerCase == event.key.toLowerCase) {
            console.log('Chegou la, UMA tecla só')

            handleAddItem(id)
          }
        }
      }
    }
    const handleTabKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Tab' && receivedAmountRef.current) {
        // event.preventDefault()
        receivedAmountRef.current.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    // window.addEventListener('keydown', handleTabKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      // window.removeEventListener('keydown', handleTabKeyPress)
    }
  }, [keySequence])

  useEffect(() => {
    fetchItems()

    const handleQKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'q' && receivedAmountRef.current) {
        event.preventDefault()
        receivedAmountRef.current.focus()
      }
    }

    window.addEventListener('keydown', handleQKeyPress)

    return () => {
      window.removeEventListener('keydown', handleQKeyPress)
    }
  }, [])

  return (
    <Container>
      <div className="items-wrapper">
        {response.map(item => (
          <div key={item.id}>
            <Card
              onClick={() => handleAddItem(item.id)}
              color={item.color}
              counter={item.shortCut.join(' + ')}
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
                    className="received"
                    ref={receivedAmountRef}
                    type="number"
                    placeholder="Valor recebido"
                    tabIndex={1}
                    onFocus={() => setIsInReceivedInput(true)} // Set the flag when the input is focused
                    onBlur={() => setIsInReceivedInput(false)} // Reset the flag when the input loses focus
                    value={receivedAmount}
                    onChange={e => setReceivedAmount(e.target.value)}
                    onKeyPress={e => {
                      if (e.key === 'Enter') {
                        handlePagoClick()
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
