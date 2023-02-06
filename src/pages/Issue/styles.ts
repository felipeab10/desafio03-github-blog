import styled from "styled-components";

export const IssueContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 864px;

`
export const IssueTopBar = styled.div`
display: flex;
flex-direction: column;
gap:20px;
width: 100%;
background: ${props => props.theme["base-profile"]};
box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
height: 212px;
border-radius: 10px;
padding: 32px 40px;
margin-top: -80px;
margin-bottom: 40px;

flex-wrap: nowrap;

h1 {
  font-family: 'Nunito';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 130%;
color:${props => props.theme["base-title"]};
}
`
export const IssueTopBarLinks = styled.div`
display: flex;
width: 100%;
justify-content: space-between;

a{
  text-decoration: none;
  color:${props => props.theme.blue};
  text-transform: uppercase;
  font-weight: 700;
font-size: 12px;
line-height: 160%;
  &:hover{
    border-bottom:1px solid ${props => props.theme.blue};
  }

}
`
export const SocialContainer = styled.div`
display: flex;
gap:32px;
`