import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkContainer } from "./styles";
interface LinkProps {
  label:string
  url:string | undefined
  icon?:any
}
export function Link({label,icon,url = '#'}:LinkProps){
  return (
    <LinkContainer>
    <a href={url} target="_blank">{label}<FontAwesomeIcon icon={icon} /></a>
    </LinkContainer>
  )
}