import { ThemeProvider } from 'styled-components'
import Theme from './styles/Theme'
import GlobalStyles from './styles/global'
import { ItemRegister } from './pages/ItemRegister'

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles></GlobalStyles>
        <ItemRegister />
      </ThemeProvider>
    </>
  )
}

export default App
