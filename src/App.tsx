import { ThemeProvider } from 'styled-components'
import Theme from './styles/Theme'
import GlobalStyles from './styles/global'
import { Routes } from './routes'
import { AuthProvider } from './hooks/auth'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
