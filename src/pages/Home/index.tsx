import { Issues } from "./components/Issues";
import { PersonGit } from "./components/PersonGit";

import { Search } from "./components/Search";
import { HomeContainer } from "./styles";

export function Home(){
  return (
   <HomeContainer>
    <PersonGit />
    <Search />
    <Issues />
   </HomeContainer>
  )
}