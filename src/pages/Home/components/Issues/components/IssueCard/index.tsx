import { IssueCardContainer, IssueCardHeader, IssueDate, IssueTitle } from "./styles";
import ptBR from 'date-fns/locale/pt-BR'
import { formatDistanceToNow } from 'date-fns'
import { useNavigate } from "react-router-dom";


interface IssueCardProps {
  issue: {
    id: number
    title: string
    body: string
    created_at: string
  }
}


export function IssueCard({ issue }: IssueCardProps) {
  const navigate = useNavigate()

  const handleIssue = () =>  {
    navigate(`/issue/${issue.id}`)
  }

  return (
    <IssueCardContainer onClick={handleIssue}>
      <IssueCardHeader>
        <IssueTitle>
          {issue.title}
        </IssueTitle>
        <IssueDate>
          {formatDistanceToNow(new Date(issue.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </IssueDate>
      </IssueCardHeader>
      <p>{issue.body}</p>
    </IssueCardContainer>
  )
}