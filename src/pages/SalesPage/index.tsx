import { FC, useEffect, useState, useRef } from 'react'
import { Container } from './styles.js'
import { Card } from '../../components/Card/index.js'
import { Navbar } from '../../components/Navbar/index.js'
import { api } from '../../services/api.js'
import { toast } from 'react-toastify'
import { FaMinus } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'

interface Item {
  quantity: number
  id: number
  name: string
  price: number
  color: string // Added the color property
  shortCut: string
}

interface SalesPageProps {}

export const SalesPage: FC<SalesPageProps> = () => {
  const [itemsOrder, setItemsOrder] = useState<Item[]>([])
  const [response, setResponse] = useState<Item[]>([])
  const [receivedAmount, setReceivedAmount] = useState<string>('')
  const [isInReceivedInput, setIsInReceivedInput] = useState(false)
  let changeAmount: string = ''

  const receivedAmountRef = useRef<HTMLInputElement | null>(null)

  const fetchItems = () => {
    api
      .get('/produtos')
      .then(function (response) {
        console.log(response.data)
        console.log(response.data)
        response.data.sort((a: { shortCut: any }, b: { shortCut: any }) =>
          a.shortCut.localeCompare(b.shortCut)
        )
        setResponse(response.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  function handleAddItem(item_id: number) {
    const existingItem = itemsOrder.find(orderItem => orderItem.id === item_id)

    if (existingItem) {
      const updatedItems = itemsOrder.map(orderItem =>
        orderItem.id === item_id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      )
      setItemsOrder(updatedItems)
    } else {
      const newItem = response.find(item => item.id === item_id)
      if (newItem) {
        setItemsOrder(prevOrder => [...prevOrder, { ...newItem, quantity: 1 }])
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
    fetchItems()

    const handleKeyPress = (event: KeyboardEvent) => {
      if (!isInReceivedInput) {
        console.log(event.key)
        console.log(event.key)
        console.log(event.key)
        response.forEach(item => {
          if (item.shortCut == event.key.toString()) {
            console.log('Found key')
            handleAddItem(item.id)
          }
          console.log('Item shortCut ' + item.shortCut)
        })
        // const keyNumber = parseInt(event.key)
        // if (keyNumber >= 1 && keyNumber <= 9 && response[keyNumber - 1]) {
        //   const item_idToAdd = response[keyNumber - 1].id
        //   handleAddItem(item_idToAdd)
        // }
      }
    }

    const handleTabKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Tab' && receivedAmountRef.current) {
        event.preventDefault()
        receivedAmountRef.current.focus()
      }
    }

    const handleQKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'q' && receivedAmountRef.current) {
        event.preventDefault()
        receivedAmountRef.current.focus()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    window.addEventListener('keydown', handleTabKeyPress)
    window.addEventListener('keydown', handleQKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
      window.removeEventListener('keydown', handleTabKeyPress)
      window.removeEventListener('keydown', handleQKeyPress)
    }
  }, [])

  return (
    <Container>
      <div className="items-wrapper">
        {response.map((item, index) => (
          <div key={item.id} onClick={() => handleAddItem(item.id)}>
            <Card
              color={item.color}
              counter={item.shortCut.toUpperCase()}
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

                <td className="counterBtnTD">
                  <button
                    className="counterMinus"
                    onClick={() => handleDecreaseQuantity(orderItem.id)}
                  >
                    <FaMinus />
                  </button>
                  <span>{orderItem.quantity}</span>
                  <button
                    className="counterPlus"
                    onClick={() => handleIncreaseQuantity(orderItem.id)}
                  >
                    <FaPlus />
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
                    placeholder="Valor"
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
