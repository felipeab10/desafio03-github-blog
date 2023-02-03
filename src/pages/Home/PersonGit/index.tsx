import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { PersonGitConainer } from "./styles";

type Persontype = {
  name: string;
  avatar_url: string;
  html_url: string;
  followers: number;
}

export function PersonGit(){
  const [person,setPerson] = useState<Persontype>();

  useEffect(()=>{
    api.get('users/felipeab10').then(response => {
      console.log(response)
      setPerson(response.data)
    })

  },[])


  return (
    <PersonGitConainer>
      <img src={person?.avatar_url} alt="" />
      <h1>{person?.name}</h1>
      <FontAwesomeIcon icon={faCoffee} size="xs" />
    </PersonGitConainer>
  )
}