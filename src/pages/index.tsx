import Layouts from "../components/Layouts";

import styled from "styled-components";

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

  > p {
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

export default function Index() {
  return (
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
  );
}
