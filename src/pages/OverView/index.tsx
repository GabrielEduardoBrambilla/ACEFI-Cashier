import { FC, useEffect, useState } from 'react'
import { Container } from './styles.js'
import { api } from '../../services/api.js'
import { Navbar } from '../../components/Navbar/index.js'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    fontSize: 16,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
]

interface OverViewProps {}
interface Item {
  id: number
  name: string
  price: number
  color: string
}
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Item', width: 130 },
  { field: 'price', headerName: 'Preço Unid.', type: 'number', width: 130 },
  { field: 'color', headerName: 'Qtd. vendida', type: 'number', width: 130 },
  {
    field: 'totalValue',
    headerName: 'Total vendido',
    type: 'number',
    width: 130
  }
]
export const OverView: FC<OverViewProps> = () => {
  const [response, setResponse] = useState<Item[]>([])
  const [editItem, setEditItem] = useState<Item>()
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)

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
  function handleItemUpdate(data: FormData) {
    const nome = data.get('name') as string
    const preco = data.get('price') as string
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
      .put(`/produtos/${editItem?.id}`, {
        name: nome,
        price: preco,
        color: colorWithoutHash
      })
      .then(function () {
        toast.success('Item atualizdo com sucesso', {
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
  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <Container>
      <div className="items-wrapper">
        <p>Vendas por item</p>

        <div
          style={{
            height: 400,
            width: '100%',
            color: '#FFF',
            borderRadius: 9,
            fontSize: '16px'
          }}
        >
          <DataGrid
            sx={{ fontSize: 16, color: '#FFF' }}
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
      </div>
      <div className="right-section">
        <Navbar />
      </div>
    </Container>
  )
}
