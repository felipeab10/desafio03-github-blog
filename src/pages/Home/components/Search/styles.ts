import styled from "styled-components";

export const SearchContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
gap: 12px;
`
export const SearchHeader = styled.div`
display: flex;
width: 100%;
justify-content: space-between;

h1{
  font-weight: 700;
font-size: 18px;
line-height: 160%;
color:${props => props.theme["base-subtitle"]};
}
span{
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  
  text-align: right;
  color:${props => props.theme["base-span"]};

}


`

export const SearchMain = styled.div`
display: flex;
width: 100%;
align-items: center;
padding: 12px 16px;
gap: 8px;
background: ${props => props.theme["base-input"]};

border:1px solid ${props => props.theme["base-border"]};

border-radius: 6px;


input{
  background: transparent;
  border: none;
  outline: none;

  &::placeholder{
    font-weight: 400;
font-size: 16px;
line-height: 160%;
color:${props => props.theme["base-label"]};
  }
}

`