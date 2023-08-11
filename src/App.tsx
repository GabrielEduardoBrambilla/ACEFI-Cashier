import { ThemeProvider } from 'styled-components'
import Theme from './styles/Theme'
import GlobalStyles from './styles/global'
import { RouterProvider } from 'react-router-dom'
import { Routes } from './routes'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  )
}

export default App
