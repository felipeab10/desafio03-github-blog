import { PersonGit } from "./PersonGit";
import { Search } from "./Search";
import { HomeContainer } from "./styles";

export function Home(){
  return (
   <HomeContainer>
    <PersonGit />
    <Search />
   </HomeContainer>
  )
}