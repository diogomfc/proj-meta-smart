import React from "react";
import CountUp from "react-countup";
import { ButtonHTMLAttributes } from "react";
import Image from "next/image";

import { Container, ContentListagemClientes } from "./styles";

interface IHistoryCard {
  tagColor?: string;
  //key: string;
  linkCategoria: string;
  linkRevisao: string | number;
  linkData: string | number;
  linkRevisadoPor: string;
  linkTitulo: string;
  qtdViews: any;
  qtdCommit: any;
  qtdCompartilhar: number;
  iconTitulo: any;
  iconViews: string;
  iconCommit: string;
  iconCompartilhar: string;
  iconEdit: string;
  iconDelete: string;
  link: string;
  linkEdit: any;
  linkDelete: any;
  linkViews: any;
  linkCommit: any;
  linkCompartilhar: any;
  tagStatus?: string;
}

function CardListBC(props: IHistoryCard) {
  return (
    <Container>
      <ContentListagemClientes color={props.tagColor}>
        <div className="Categoria">
          <div className="Tag" />
          <h2>{props.linkCategoria}</h2>
        </div>
        <div className="Revisao">
          <h2>{props.linkRevisao}</h2>
        </div>
        <div className="Data">
          <h2>{props.linkData}</h2>
        </div>
        <div className="RevisadoPor">
          <h2>{props.linkRevisadoPor}</h2>
        </div>
        <a href={props.link} target="_blank">
          <div className="Title">
            <img src={props.iconTitulo} className="TitleImg" alt="icon" />
            <h2>{props.linkTitulo}</h2>
          </div>
        </a>
        <div className="Acoes">
          <a onClick={props.linkViews}>
            <img src={props.iconViews} alt="Views" title="Views" />
            <span>{props.qtdViews}</span>
          </a>
          <a onClick={props.linkCommit}>
            <img
              src={props.iconCommit}
              alt="Perguntas e Comentários"
              title="Perguntas e Comentários"
            />
            <span>{props.qtdCommit}</span>
          </a>
          <a onClick={props.linkCompartilhar}>
            <img
              src={props.iconCompartilhar}
              alt="Compartilhamento"
              title="Compartilhamento"
            />
            <span>{props.qtdCompartilhar}</span>
          </a>
          <a onClick={props.linkEdit}>
            <img src={props.iconEdit} alt="Editar" title="Editar Processo" />
          </a>
          <a onClick={props.linkDelete}>
            <img
              src={props.iconDelete}
              alt="Deletar"
              title="Excluir Processo"
            />
          </a>
        </div>
      </ContentListagemClientes>
    </Container>
  );
}

export default CardListBC;
