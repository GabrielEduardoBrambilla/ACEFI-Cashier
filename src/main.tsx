import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import { ThemeProvider } from "@material-tailwind/react";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>

    <App />
  </ThemeProvider>
)
