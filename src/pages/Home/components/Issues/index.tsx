import { useIssueContext } from "../../../../hooks/useIssueContext";
import { IssueCard } from "./components/IssueCard";
import { IssuesContainer } from "./styles";

export function Issues() {
  const {issuesFiltered} = useIssueContext()
  

  return (
    <IssuesContainer>
      {issuesFiltered?.map(issue => {
        return (
          <IssueCard key={issue.id} issue={issue} />
        )
      })}
    </IssuesContainer>
  )
}