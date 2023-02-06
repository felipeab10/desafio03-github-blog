import styled from "styled-components";

export const IssueCardContainer = styled.div`
display: flex;
background: ${props => props.theme["base-post"]};
border-radius: 10px;
padding: 32px;
flex-direction: column;
gap: 20px;
max-height: 260px;


p{
  font-weight: 400;
font-size: 16px;
line-height: 160%;
color: ${props => props.theme["base-text"]};
overflow:hidden;
  line-height: 1.6rem;
  max-height: 6rem;
  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  overflow: hidden !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;

}

cursor: pointer;

`
export const IssueCardHeader = styled.div`
display: flex;
justify-content: space-between;

`
export const IssueTitle = styled.span`
color: ${props => props.theme["base-title"]};
font-weight: 700;
font-size: 20px;
line-height: 160%;
width: 65%;

`
export const IssueDate = styled.span`
color: ${props => props.theme["base-span"]};
font-weight: 400;
font-size: 14px;
line-height: 160%;


`