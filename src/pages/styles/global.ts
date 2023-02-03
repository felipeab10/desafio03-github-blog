import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:focus {
  outline: 0;
}
body {
   display: flex;
   background: ${(props) => props.theme['base-background']};
   flex-direction: column;
   

 }
body, input, textarea,button {
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color:${(props) => props.theme['base-text']};
}
`