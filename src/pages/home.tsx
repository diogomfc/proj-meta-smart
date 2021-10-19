import Layouts from "../components/Layouts";
import Link from "next/link";
import Head from "next/head";

import { Container } from "../styles/homeStyle";

import ConexaoDb from "../utils/conexaoDB";
import { GetStaticProps } from "next";
import Swal from "sweetalert2";

interface IdbMetricasTitle {
  title: string;
}

function Home() {
  return (
    <>
      {/* <Head>
        <script type="text/javascript" src="/static/scriptCarregar.js"></script>
      </Head> */}

      <Layouts>
        <Container>
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
        </Container>
      </Layouts>
    </>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   let nomeBanco = ConexaoDb;

//   const {
//     guiaCadastroConsultores,
//     guiaMetricaDia,
//     dbMetricasConsultoresAuto,
//     title,
//     guiaHistoricoClientesDia,
//   } = await fetch(nomeBanco)
//     .then((res) => {
//       if (res.ok) return res.json();
//     })
//     .then((resObjPromise) => resObjPromise);

//   return {
//     props: {
//       dbMetricasConsultoresAuto,
//       title,
//       guiaMetricaDia,
//       guiaCadastroConsultores,
//       guiaHistoricoClientesDia,
//     },
//     revalidate: 10,
//   };
// };

export default Home;
