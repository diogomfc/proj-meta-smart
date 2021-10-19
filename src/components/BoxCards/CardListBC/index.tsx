import React from "react";
import CountUp from "react-countup";

import { Container, ContentListagemClientes } from "./styles";

interface IHistoryCard {
  //tagColor: string;
  linkCategoria: string;
  linkRevisao: string | number;
  linkData: string | number;
  linkRevisadoPor: string;
  linkTitulo: string;
  qtdViews: number;
  qtdCommit: number;
  qtdCompartilhar: number;
  iconTitulo: string;
  iconViews: string;
  iconCommit: string;
  iconCompartilhar: string;
  iconEdit: string;
  iconDelete: string;
  link: string;
  linkEdit: string;
  linkDelete: string;
  linkViews: string;
  linkCommit: string;
  linkCompartilhar: string;
}

function CardListBC(props: IHistoryCard) {
  return (
    <Container>
      <a href={props.link} target="_blank">
        <ContentListagemClientes>
          <div className="Categoria">
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
          <div className="Title">
            <img src={props.iconTitulo} alt="Listagem" />
            <h2>{props.linkTitulo}</h2>
          </div>

          <div className="Acoes">
            <a href={props.linkViews} target="_blank">
              <img
                src={props.iconViews}
                alt="Quantidade de Views"
                title="Quantidade de Views"
              />
              <span>
                <CountUp end={props.qtdViews} />
              </span>
            </a>
            <a href={props.linkCommit} target="_blank">
              <img
                src={props.iconCommit}
                alt="Quantidade de Commit"
                title="Quantidade de Commit"
              />
              <span>{props.qtdCommit}</span>
            </a>
            <a href={props.linkCompartilhar} target="_blank">
              <img
                src={props.iconCompartilhar}
                alt="Quantidade de Compartilhamento"
                title="Quantidade de Compartilhamento"
              />
              <span>{props.qtdCompartilhar}</span>
            </a>
            <a href={props.linkEdit} target="_blank">
              <img src={props.iconEdit} alt="Editar" title="Editar Processo" />
            </a>
            <a href={props.linkDelete} target="_blank">
              <img
                src={props.iconDelete}
                alt="Deletar"
                title="Excluir Processo"
              />
            </a>
          </div>
        </ContentListagemClientes>
      </a>
    </Container>
  );
}

export default CardListBC;
