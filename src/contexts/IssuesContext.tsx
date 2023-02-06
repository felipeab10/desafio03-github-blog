import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";





interface IssuesProviderProps{
  children:ReactNode
}

interface IssuesType {
  id:number
  title:string
  body:string
  created_at:string
  html_url:string
  comments:string
  user:{
    login:string
  }

}

interface IssuesContextType {
  issuesFiltered:IssuesType[] | undefined
  onChangeFilter:(value:string) => void
}

export const IssuesContext = createContext<IssuesContextType>({} as IssuesContextType)

export function IssuesProvider({children}:IssuesProviderProps){
  const [issues,setIssues] = useState<IssuesType[]>([]);
  const [issuesFiltered,setIssuesFilted] = useState<IssuesType[]>([]);
  

  const onChangeFilter = (value:string) => {
    const issuesMap = issues.filter(issue => {
      const title = issue.title.toUpperCase()
      const body = issue.body.toUpperCase()
      if(title.includes(value.toUpperCase()) || body.includes(value.toUpperCase())) return issue
    })
    setIssuesFilted(issuesMap)

    
  }
  
  useEffect(()=>{
    api.get(`search/issues?q=%20repo:felipeab10/desafio03-github-blog`).then(response=>{
      setIssues(response.data.items)
      setIssuesFilted(response.data.items)
      
    })
   
  },[])
  return (
    <IssuesContext.Provider value={{issuesFiltered,onChangeFilter}}>
      {children}
    </IssuesContext.Provider>
  )
}