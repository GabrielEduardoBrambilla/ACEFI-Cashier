import { FC } from 'react'
import { Container } from './styles.js'
// import { api } from '../../services/api.js'
import { FaStore, FaUserCircle } from 'react-icons/fa'
import { BsFiletypeXlsx } from 'react-icons/bs'
import { Card } from '../../components/Card/index.js'
import { Navbar } from '../../components/Navbar/index.js'
import { api } from '../../services/api.js'

interface SalesPageProps {}

export const SalesPage: FC<SalesPageProps> = () => {
  function handleItemRegister(data: FormData) {
    const nome = data.get('nome') as string
    const preco = data.get('preco') as string
    const file = data.get('selectedFile') as File
    api
      .post('/signup', {
        nome: nome,
        preco: preco,
        image: file
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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="right-section">
        <Navbar store />
        <table className="order-items">
          <tr>
            <th>Nome</th>
            <th>Quant</th>
            <th>Preço</th>
          </tr>
          <tr>
            <td>Coca-cola</td>
            <td>2</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Sushi</td>
            <td>2</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Nigiri</td>
            <td>2</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Coca-cola</td>
            <td>2</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Sushi</td>
            <td>2</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Nigiri</td>
            <td>2</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Coca-cola</td>
            <td>2</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Sushi</td>
            <td>2</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Nigiri</td>
            <td>2</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Coca-cola</td>
            <td>2</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Sushi</td>
            <td>2</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Nigiri</td>
            <td>2</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Coca-cola</td>
            <td>2</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Sushi</td>
            <td>2</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Nigiri</td>
            <td>2</td>
            <td>5</td>
          </tr>
        </table>
        <div className="order-info">
          <table>
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
          </table>
          <button>PAGO</button>
        </div>
      </div>
    </Container>
  )
}
