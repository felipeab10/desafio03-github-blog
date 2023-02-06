import styled from "styled-components";

export const LinkContainer = styled.div`

a{
  display: flex;
gap:8px;
flex: 1;
font-size: 12px;
color: ${props => props.theme.blue};
font-weight: 700;
text-transform: uppercase;
text-decoration: none;

:hover{
  border-bottom: 1px solid ${props => props.theme.blue};
}
}



`