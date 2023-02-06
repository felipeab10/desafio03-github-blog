import { faCalendarDay, faCoffee, faComment, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { Link } from "../../components/Link";
import {Link as RouterLink} from 'react-router-dom'
import { useIssueContext } from "../../hooks/useIssueContext";
import { Social } from "../Home/components/PersonGit/components/Social";
import { IssueContainer, IssueTopBar, IssueTopBarLinks, SocialContainer } from "./styles";
import ptBR from 'date-fns/locale/pt-BR'
import { formatDistanceToNow } from 'date-fns'


export function Issue(){
  const {issues} = useIssueContext()
  const {id} = useParams();
  const issue = issues?.find(issue => issue.id === Number(id))
  

  if(!issue){
    return (
      <h1>Carregando</h1>
    )
  }
  return (
    <IssueContainer>
      <IssueTopBar>
        <IssueTopBarLinks>
          <RouterLink to='/'>voltar</RouterLink>
          <Link label="ver no github" url={issue.html_url} icon={faUpRightFromSquare}/>
        </IssueTopBarLinks>
        <h1>{issue?.title}</h1>
       <SocialContainer>
       <Social icon={faCoffee} title={issue?.user.login}/>
       <Social icon={faCalendarDay} title= {formatDistanceToNow(new Date(issue?.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}/>
       <Social icon={faComment} title={`${issue?.comments} comentários`}/>
       </SocialContainer>
      </IssueTopBar>
      <code>{issue?.body}</code>
    </IssueContainer>
  )
}