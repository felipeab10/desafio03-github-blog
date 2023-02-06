import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { IssuesProvider } from "../contexts/IssuesContext"
import { Router } from "../Router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

function App() {

  return (
    <BrowserRouter>
    <ThemeProvider theme={defaultTheme}>
      <IssuesProvider>
      <Router />
      </IssuesProvider>
      <GlobalStyle />
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
