import styled from "styled-components";
import Cover from '../../assets/cover.png';


export const HeaderContainer = styled.div`
display: flex;
width: 100vw;
height: 296px;
background: ${props => props.theme["base-header"]};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

justify-content: space-between;
align-items: center;

 #logo{
  margin-top: -50px;
}

`