import { FC, useEffect, useState } from 'react'
import { Container } from './styles.js'
import { api } from '../../services/api.js'
import { Navbar } from '../../components/Navbar/index.js'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridToolbarContainer,
  GridToolbarExport
} from '@mui/x-data-grid'
import { FaDownload, FaStore } from 'react-icons/fa'

interface OverViewProps {}
interface Item {
  id: number
  name: string
  price: number
  color: string
}
const columns: GridColDef[] = [
  { field: 'item_id', headerName: 'ID', flex: 1 },
  { field: 'name', headerName: 'Item', flex: 1 },
  {
    field: 'item_price_at_time',
    headerName: 'Preço Unid.',
    type: 'number',
    flex: 1
  },
  { field: 'quantity', headerName: 'Qtd. vendida', type: 'number', flex: 1 },
  {
    field: 'totalValue',
    headerName: 'Total vendido',
    type: 'number',
    flex: 1
  }
]

const orderColumns: GridColDef[] = [
  { field: 'order_id', headerName: 'ID Order', flex: 1 },
  { field: 'item_name', headerName: 'Item', flex: 1 },
  {
    field: 'created_at',
    headerName: 'Data criação',
    type: 'Date',
    flex: 1
  },
  { field: 'item_price_at_time', headerName: 'Preço', type: 'number', flex: 1 },
  {
    field: 'quantity',
    headerName: 'Qtd. Item',
    type: 'number',
    flex: 1
  },
  {
    field: 'total_price',
    headerName: 'Total Ordem',
    type: 'number',
    flex: 1
  }
]
export const OverView: FC<OverViewProps> = () => {
  const [response, setResponse] = useState<Item[]>([])
  const [order, setOrder] = useState<Item[]>([])
  const navigate = useNavigate()

  const fetchItems = () => {
    api
      .get('/getItemSalesXLSX')
      .then(function (response) {
        const modifiedResponse = response.data.map(
          (item: {
            quantity: number
            item_price_at_time: number
            id: number
          }) => ({
            ...item,
            id: uuidv4(), // Generating unique ID for each row
            item_id: item.id,
            totalValue: item.quantity * item.item_price_at_time
          })
        )
        setResponse(modifiedResponse) // Update items state with fetched data
      })
      .catch(function (error) {
        console.error(error)
      })
  }
  const fetchOrder = () => {
    api
      .get('/getOrderSalesXLSX')
      .then(function (response) {
        const flattenedResponse = response.data.flatMap(
          (order: {
            order_items: {
              item_name: any
              item_price_at_time: any
              quantity: any
            }[]
            created_at: any
            order_id: any
            total_price: any
          }) =>
            order.order_items.map(
              (item: {
                item_name: any
                item_price_at_time: any
                quantity: any
              }) => ({
                id: uuidv4(), // Generating unique ID for each row
                created_at: new Date(order.created_at).toLocaleDateString(
                  'en-GB'
                ), // Formatting created_at date as DD-MM-YYYY
                order_id: order.order_id,
                item_name: item.item_name,
                item_price_at_time: item.item_price_at_time,
                quantity: item.quantity,
                total_price: order.total_price
              })
            )
        )
        console.log(flattenedResponse)
        setOrder(flattenedResponse)
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
  function handleItemDeletion(item: any) {
    const id = item.id
    api
      .delete(`/produtos/${id}`, {})
      .then(function () {
        toast.warning('Item deletado com sucesso', {
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

  const fetchXLSX = async (items: boolean) => {
    try {
      toast.info('Iniciando download, aguarde um momento', {
        position: 'bottom-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light'
      })

      const response = items
        ? await api.get('/getXLSX/ITEMS_SALES', { responseType: 'blob' })
        : await api.get('/getXLSX/ALL_SALES', { responseType: 'blob' })

      // Create a Blob from the response data
      const blob = new Blob([response.data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      })

      // Create a blob URL for the Blob
      const url = URL.createObjectURL(blob)

      // Create a temporary link element to initiate download
      const link = document.createElement('a')
      link.href = url
      link.download = 'relatorio_vendas.xlsx' // Set the desired filename
      // Trigger a click on the link to start the download
      link.click()

      // Clean up the temporary link
      link.remove()
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchItems()
    fetchOrder()
  }, [])

  return (
    <Container>
      <div className="items-wrapper">
        <div
          style={{
            height: 350,
            width: '100%',
            maxHeight: 'max-content',
            color: '#FFF',
            borderRadius: 9,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <p className="table-title">
            Vendas por itens
            <FaDownload
              onClick={() => {
                fetchXLSX(true)
              }}
            />
          </p>
          <DataGrid
            sx={{ fontSize: 14, color: '#FFF' }}
            rows={response}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 }
              }
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
        <div
          style={{
            height: 400,
            width: '100%',
            maxHeight: '50%',
            color: '#FFF',
            borderRadius: 9,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <p className="table-title">
            Vendas geral
            <FaDownload
              onClick={() => {
                fetchXLSX(false)
              }}
            />
          </p>

          <DataGrid
            sx={{ fontSize: 14, color: '#FFF' }}
            rows={order}
            columns={orderColumns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 }
              }
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
      </div>
      <div className="right-section">
        <Navbar />
      </div>
    </Container>
  )
}
