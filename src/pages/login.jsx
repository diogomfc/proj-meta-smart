import Link from "next/link";
import React from "react";

import { Container } from "../styles/loginStyle";

export default function Login() {

  return (
    <Container>
      <aside>
        <div className="Illustration">
          <img src="/img/imgIllustration1.svg" alt="Ilustração" />
        </div>
      </aside>
      <main>
        <header>
          <img src="/img/LogoG.svg" alt="Logo" />
        </header>
        <Link href="/Users/metricasMes">
          <a className="btnLogin">
            <img src="/img/logoGoogle.svg" alt="Crie sua Conta" />
            Crie sua conta
          </a>
        </Link>
        <div className="separator">
          <div></div>
          <div>ou entre com sua conta</div>
          <div></div>
        </div>
        <section>
          <form action="">
            <input type="text" placeholder="Usuário" />
            <input type="password" placeholder="Senha" />
            <Link href="/">
              <a className="btnCriar">
                <img src="/img/log-in.svg" alt="Entrar no Meta Smart" />
                Entrar no meta smart
              </a>
            </Link>
            <button type="submit">Recuperar senha</button>
            <a href="#" ></a>
          </form>
        </section>
      </main>
    </Container>
  );
}
