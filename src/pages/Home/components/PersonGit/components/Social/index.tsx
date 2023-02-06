import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialContainer } from "./styles";

interface SocialProps {
  title:string | undefined
  icon:any
}
export function Social({title,icon}:SocialProps){
  return (
    <SocialContainer><FontAwesomeIcon icon={icon} />{title}</SocialContainer>
  )
}