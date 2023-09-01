import { ThemeProvider } from 'styled-components'
import Theme from './styles/Theme'
import GlobalStyles from './styles/global'
import { Routes } from './routes'
import { AuthProvider } from './hooks/auth'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
        <ToastContainer
          position="bottom-left"
          autoClose={2000}
          limit={3}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
