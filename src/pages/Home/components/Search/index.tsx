import { useIssueContext } from "../../../../hooks/useIssueContext";
import { SearchContainer, SearchHeader, SearchMain } from "./styles";

export function Search(){
  const { issuesFiltered,onChangeFilter} = useIssueContext()


  return (
    <SearchContainer>
      <SearchHeader>
      <h1>Publicações</h1>
      <span>{`${issuesFiltered?.length} publicações`}</span>
      </SearchHeader>
      <SearchMain>
        <input type="text" placeholder="Buscar conteúdo" onChange={event=> onChangeFilter(event.target.value)}/>
      </SearchMain>
    </SearchContainer>
  )
}