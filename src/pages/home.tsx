import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    background: #1f2d27;
    flex: 7;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 120px 40px;

    img {
      max-width: 600px;
    }
  }

  main {
    flex: 8;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    padding: 0 32px;
  }
  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    //max-width: 600px;
    align-items: stretch;
    text-align: center;

    > img {
      align-items: center;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 0.5em;
      input {
        height: 50px;
        border-radius: 16px;
        padding: 0 16px;
        background-color: #edf0ef;
        //border-radius: 1px solid #efefef;
      }
      button {
        margin-top: 16px;
      }
      button,
      input {
        width: 50%;
      }
    }
  }
`;

export default function Home() {
  return (
    <Container>
      <aside>
        <img src="/img/imgIllustration.svg" alt="Ilustração" />
      </aside>
      <main className="main-content">
        <div>
          <img src="/img/logoG.svg" alt="Logo" />
          <button>
            <img src="/img/logoGoogle.svg" alt="Crie sua conta" />
            Crie sua sua conta
          </button>
          <div>ou entre com sua conta</div>
          <form>
            <input type="text" placeholder="Usuário" />
            <input type="text" placeholder="Senha" />
            <button type="submit">entrar na sala</button>
          </form>
        </div>
      </main>
    </Container>
  );
}
