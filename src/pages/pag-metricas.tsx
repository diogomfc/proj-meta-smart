import React from "react";
import Link from "next/link";
import Layouts from "../components/Layouts";
import ContentHeader from "../components/ContentHeader";

import { Container, Header, Main } from "../styles/metricasStyle";

export default function Metricas() {
  return (
    <div>
      <Layouts>
        <Container>
          <Header>
            <ContentHeader
              title="Métricas"
              subTitle="Histórico Mensal"
              lineColor="#11BB77"
            />
          </Header>

          <Main>
            <img src="/img/ImgAlertaResult.svg" />
            <p>Nenhuma resultado por aqui...</p>
            <span>
              Criamos um ambiente dedicado para que você possa evoluir de forma
              <br />
              contínua e se manter atualizado com nossos processos e <br />{" "}
              procedimentos.
            </span>
            <div>
              <h1>Navegue pelo menu superior e embarque nesse foguete.</h1>
              <img src="/img/iconRocket.svg" />
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
