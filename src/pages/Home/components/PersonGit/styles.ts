import styled from "styled-components";

export const PersonGitConainer = styled.div`
display: flex;
background: ${props => props.theme["base-profile"]};
box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
height: 212px;
border-radius: 10px;
padding: 32px 40px;
margin-top: -80px;
margin-bottom: 72px;
gap: 32px;
width: 100%;
max-width: 864px;
flex-wrap: nowrap;

img{
  object-fit: contain;
  width: 148px;
}

`
export const PersonInfo = styled.div`
display: flex;
gap: 24px;
width: 100%;
flex-wrap: nowrap;
justify-content: space-between;
`
export const Info = styled.div`
display: flex;
gap: 24px;
flex-direction: column;
`

export const SocialMedia = styled.div`
display: flex;
gap: 24px;
`
