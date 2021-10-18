import Layouts from "../components/Layouts";
import Link from "next/link";
import Head from "next/head";

import styled from "styled-components";

import ConexaoDb from "../utils/conexaoDB";
import { GetStaticProps } from "next";
import Swal from "sweetalert2";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding-bottom: 9rem;

  height: 100vw;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    padding: 1.5rem;

    h1 {
      color: #1f2d27;
      font-weight: bold;
      font-size: 2.2rem;
    }
  }

  > #p1 {
    color: #1f2d27;
    font-weight: bold;
    font-size: 1.6rem;
    padding: 1.5rem;
  }

  > span {
    color: #1f2d27;
    font-size: 1.6rem;
  }
`;

interface IdbMetricasTitle {
  title: string;
}

function Index(props: IdbMetricasTitle) {
  return (
    <>
      <Head>
        <script type="text/javascript" src="/static/scriptCarregar.js"></script>
      </Head>

      <Layouts>
        <Container>
          <img src="/img/ImgAlertaResult.svg" />
          <h1>Base de dados: {props.title}</h1>
          <Link href="/login">Lgin</Link>
          <p id="p1">Nenhuma resultado por aqui...</p>
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
        </Container>
      </Layouts>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let nomeBanco = ConexaoDb;

  const {
    guiaCadastroConsultores,
    guiaMetricaDia,
    dbMetricasConsultoresAuto,
    title,
    guiaHistoricoClientesDia,
  } = await fetch(nomeBanco)
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((resObjPromise) => resObjPromise);

  return {
    props: {
      dbMetricasConsultoresAuto,
      title,
      guiaMetricaDia,
      guiaCadastroConsultores,
      guiaHistoricoClientesDia,
    },
    revalidate: 10,
  };
};

export default Index;
