import React from "react";
import Link from "next/link";
import Layouts from "../components/Layouts";
import ContentHeader from "../components/ContentHeader";
import CardListBC from "../components/BoxCards/CardListBC";

import {
  Container,
  Header,
  FiltroPesquisa,
  Main,
  ContentListagemClientes,
} from "../styles/baseStyle";

export default function BasedeConhecimento() {
  return (
    <div>
      <Layouts>
        <Container>
          <Header>
            <ContentHeader
              title="Smart Apps"
              subTitle="Base de Conhecimento"
              lineColor="#11BB77"
            />
          </Header>
          <FiltroPesquisa>
            <section>
              <form action="">
                <input
                  className="formFiltro"
                  type="text"
                  placeholder="Filtrar por categoria"
                />
                <input
                  className="formPesquisa"
                  type="text"
                  placeholder="Pesquisar por palavra chave. Ex: Cadência"
                />
                <Link href="#">
                  <div className="btnPesquisa">
                    <img src="/img/imgPesquisar.svg" alt="Imprimir" />
                  </div>
                </Link>
                <Link href="#">
                  <div className="btnAdcionar">
                    <h1>Adicionar</h1>
                  </div>
                </Link>
              </form>
            </section>
          </FiltroPesquisa>

          <Main>
            <ContentListagemClientes>
              <div className="TitleCategoria">
                <h2>CATEGORIA</h2>
              </div>
              <div className="TitleRevisao">
                <h2>REVISÃO</h2>
              </div>
              <div className="TitleData">
                <h2>DATA</h2>
              </div>
              <div className="TitleRevisadoPor">
                <h2>REVISADO POR</h2>
              </div>
              <div className="TitleTitle">
                <h2>TÍTULO</h2>
              </div>
              <div className="TitleAcoes">
                <h2>AÇÕES</h2>
              </div>

              <div className="AreaListagemCliente">
                <CardListBC
                  key={1}
                  linkCategoria="Pós Crédito"
                  linkRevisao={1.0}
                  linkData="09 / 2021"
                  linkRevisadoPor="Gabriela Costa"
                  iconTitulo="/icons/iconsBaseC/confluence.svg"
                  linkTitulo="Cadência Automática"
                  link="https://creditas.atlassian.net/l/c/ZMgrCMf4"
                  iconViews="/icons/iconsBaseC/iconQdViews.svg"
                  qtdViews={25}
                  linkViews="#Views"
                  iconCommit="/icons/iconsBaseC/iconCommit.svg"
                  qtdCommit={3}
                  linkCommit="#Commits"
                  iconCompartilhar="/icons/iconsBaseC/iconCompartilhar.svg"
                  qtdCompartilhar={74}
                  linkCompartilhar="#Compartilhar"
                  iconEdit="/icons/iconsBaseC/iconEdit.svg"
                  linkEdit="#Editar"
                  iconDelete="/icons/iconsBaseC/iconDelet.svg"
                  linkDelete="#Deletar"
                />
                <CardListBC
                  key={1}
                  linkCategoria="Pós Crédito"
                  linkRevisao={1.0}
                  linkData="10 / 2021"
                  linkRevisadoPor="Arthur Souza"
                  iconTitulo="/icons/iconsBaseC/iconGiroSabedoria.svg"
                  linkTitulo="Giro da sabedoria - Regras e manual da cadência automática"
                  link="https://creditas.slack.com/files/U01Q6G07BNJ/F02AGDZR7NV/giro_da_sabedoria_-_cad__ncia.mp4"
                  iconViews="/icons/iconsBaseC/iconQdViews.svg"
                  qtdViews={57}
                  linkViews="#Views"
                  iconCommit="/icons/iconsBaseC/iconCommit.svg"
                  qtdCommit={2}
                  linkCommit="#Commits"
                  iconCompartilhar="/icons/iconsBaseC/iconCompartilhar.svg"
                  qtdCompartilhar={62}
                  linkCompartilhar="#Compartilhar"
                  iconEdit="/icons/iconsBaseC/iconEdit.svg"
                  linkEdit="#Editar"
                  iconDelete="/icons/iconsBaseC/iconDelet.svg"
                  linkDelete="#Deletar"
                />
                <CardListBC
                  key={1}
                  linkCategoria="Pós Crédito"
                  linkRevisao={1.0}
                  linkData="03 / 2021"
                  linkRevisadoPor="Isabela Silva"
                  iconTitulo="/icons/iconsBaseC/iconPdf.svg"
                  linkTitulo="Cadência de leads no pós credito"
                  link="https://docs.google.com/presentation/d/1_vJQJb0qnmHwQqZZo5MqoL5mivNlGBbxsijPC719waE/edit?usp=sharing"
                  iconViews="/icons/iconsBaseC/iconQdViews.svg"
                  qtdViews={55}
                  linkViews="#Views"
                  iconCommit="/icons/iconsBaseC/iconCommit.svg"
                  qtdCommit={1}
                  linkCommit="#Commits"
                  iconCompartilhar="/icons/iconsBaseC/iconCompartilhar.svg"
                  qtdCompartilhar={99}
                  linkCompartilhar="#Compartilhar"
                  iconEdit="/icons/iconsBaseC/iconEdit.svg"
                  linkEdit="#Editar"
                  iconDelete="/icons/iconsBaseC/iconDelet.svg"
                  linkDelete="#Deletar"
                />
              </div>
            </ContentListagemClientes>

            {/* <section className="main-content-result">
              <h1>Resultado Pesquisa</h1>
            </section> */}

            <section className="main-content">
              <img src="/img/ImgAlertaResult.svg" />
              <p>Nenhuma resultado por aqui...</p>
              <span>
                Criamos um ambiente dedicado para que você possa evoluir de
                forma
                <br />
                contínua e se manter atualizado com nossos processos e <br />{" "}
                procedimentos.
              </span>
              <div>
                <h1>Faça sua pesquisa por palavras chave.</h1>
                <img src="/img/imgPesquisar.svg" />
              </div>
              <span>
                Lembre-se de compartilhar seu conhecimento, contamos com você.
              </span>
            </section>
          </Main>
        </Container>
      </Layouts>
    </div>
  );
}
