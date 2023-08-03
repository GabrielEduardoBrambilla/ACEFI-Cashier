import { SignIn } from './pages/SignIn'
import { ThemeProvider } from 'styled-components'
import Theme from './styles/Theme.js'
import GlobalStyles from './styles/global'

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <SignIn />
      </ThemeProvider>
    </>
  )
}

export default App
