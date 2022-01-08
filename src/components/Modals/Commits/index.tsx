import React from "react";
import { Container } from "./styles";

interface IModalCommits {
  iconTitulo?: string;
  title?: string;
  link?: string;
  subTitle?: string;
  qtdCommit?: string | Number;
  textareaOnChange?: any;
  textareaValue?: any;
  userName?: string;
  userId?: string;
  userAvatar?: string;
  children?: any;
  buttonClose?: any;
  buttonOnClick?: any;
  formOnSubmit?: any;

  linkCategoria?: string;
  linkVersionamento?: string;
  linkData?: string;
  linkRvisadoPor?: string;
  tagStatus?: string;
}

export default function MDCommits(props: IModalCommits) {
  return (
    <Container>
      <div id="modal-commits">
        <header>
          <div className="content">
            <h1>Deixe sua duvida, sugestão ou feedback.</h1>
            <div>
              <a onClick={props.buttonClose}>
                <img src="/icons/iconsBaseC/iconSairCommit1.svg" alt="Sair" />
              </a>
            </div>
          </div>
        </header>

        <main>
          <div className="modal-title">
            <div className="header-Title">
              <a href={props.link} target="_blank">
                <div className="title">
                  <img src={props.iconTitulo} />
                  <h1>{props.title}</h1>
                </div>
              </a>
              <div className="tags">
                <span className="tag-categoria">{props.linkCategoria}</span>
                <span className="tag-versionamento">
                  {props.linkVersionamento}
                </span>
                <span className="tag-data">{props.linkData}</span>
                <span className="tag-revisoPor">{props.linkRvisadoPor}</span>
                <img src={props.tagStatus} />
              </div>
            </div>
            <div className="qtd-commits">
              <span>{props.qtdCommit}</span>
              <h2>Pergunta(s)</h2>
            </div>
          </div>

          <form onSubmit={props.formOnSubmit}>
            <textarea
              placeholder="Digite uma pergunta"
              onChange={props.textareaOnChange}
              value={props.textareaValue}
            />
            <div className="form-footer">
              <div className="user-info ">
                <img src={props.userAvatar} />
                <span>{props.userName}</span>
              </div>
              <button type="submit" onClick={props.buttonOnClick}>
                Enviar pergunta
              </button>
            </div>
          </form>
        </main>
        {props.children}
      </div>
    </Container>
  );
}
