import React from "react";
import Link from "next/link";
import Layouts from "../components/Layouts";
import ContentHeader from "../components/ContentHeader";

import { Container, Header, FiltroPesquisa, Main } from "../styles/baseStyle";

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
            <img src="/img/ImgAlertaResult.svg" />
            <p id="p1">Nenhuma resultado por aqui...</p>
            <span>
              Criamos um ambiente dedicado para que você possa evoluir de forma
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
          </Main>
        </Container>
      </Layouts>
    </div>
  );
}
