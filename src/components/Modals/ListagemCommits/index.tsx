import { ReactNode } from "react";

import { ContainerCommits } from "../ListagemCommits/styles";

type QuestionProps = {
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  commitDestacado?: boolean;
  commitResposta?: boolean;
  children?: ReactNode;
};

export default function ListagemCommits({
  content,
  author,
  commitDestacado = false,
  commitResposta = false,
  children,
}: QuestionProps) {
  return (
    <ContainerCommits>
      <div className="question">
        <p>{content}</p>
        <footer>
          <div className="user-info">
            <img src={author.avatar} alt={author.name} />
            <span>{author.name}</span>
          </div>
          <div>{children}</div>
        </footer>
      </div>
    </ContainerCommits>
  );
}
