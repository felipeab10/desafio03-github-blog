import styled from "styled-components";

export const SocialContainer = styled.div`
display: flex;
gap:8px;
align-items: center ;
color: ${props => props.theme["base-subtitle"]};

svg{
  color: ${props => props.theme["base-label"]};
}

`