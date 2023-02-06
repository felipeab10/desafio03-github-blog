import { faBuilding, faCoffee, faUpRightFromSquare, faUserGroup } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import { Link } from "../../../../components/Link";
import { api } from "../../../../services/api";

import { Social } from "./components/Social";
import { Info, PersonGitConainer, PersonInfo, SocialMedia } from "./styles";

type Persontype = {
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
}

export function PersonGit() {
  const [person, setPerson] = useState<Persontype>();

  useEffect(() => {
    api.get('users/felipeab10').then(response => {
      setPerson(response.data)
    })

  }, [])


  return (
    <PersonGitConainer>
      <img src={person?.avatar_url} alt="" />
      <PersonInfo>
        <Info>
          <div>
            <h1>{person?.name}</h1>
            <p>{person?.bio}</p>
          </div>
          <SocialMedia>
            <Social title={person?.login} icon={faCoffee} />
            <Social title={person?.company} icon={faBuilding} />
            <Social title={`${person?.followers} seguidores`} icon={faUserGroup} />
          </SocialMedia>
        </Info>

        <Link url={person?.html_url} icon={faUpRightFromSquare} label="GITHUB" />
      </PersonInfo>
    </PersonGitConainer>
  )
}