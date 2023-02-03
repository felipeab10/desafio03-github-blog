import { HeaderContainer } from "./styles";
import Logo from "../../assets/logo.png"
import EffectLeft from '../../assets/effectLeft.png';
import EffectRight from '../../assets/effectRight.png';

export function Header(){
  return (
    <HeaderContainer>
      <img src={EffectLeft} alt="" />
      <img src={Logo} alt="" id="logo"/>
      <img src={EffectRight} alt="" />
    </HeaderContainer>
  )
}