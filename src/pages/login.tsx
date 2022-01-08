import Link from "next/link";
import React, { FormEvent } from "react";
import { useRouter } from "next/router";
//import { database, auth } from "../services/firebase";
import { useAuth } from "../hooks/useAuth";

import { Container } from "../styles/loginStyle";

export default function Login() {
  const router = useRouter();
  const { user, signInWithGoogle } = useAuth();

  async function LoginGoogle(event: FormEvent) {
    event.preventDefault();
    if (!user) {
      await signInWithGoogle();
    }
    console.log(user);
    router.push("/home");
  }

  return (
    <Container>
      <aside>
        <div className="Illustration">
          <img src="/img/imgIllustration1.svg" alt="Ilustração" />
        </div>
      </aside>
      <main>
        <header>
          <img src="/img/Logo2.svg" alt="Logo" />
        </header>

        <button onClick={LoginGoogle} className="btnLogin">
          {/* <img src="/img/google-icon.svg" alt="Logo do Google" /> */}
          <img src="/img/logoGoogle.svg" alt="Logo do Google" />
          Entre com sua conta do Google
        </button>

        <div className="separator">
          <div></div>
          <div>ou entre com sua conta</div>
          <div></div>
        </div>
        <section>
          <form onSubmit={LoginGoogle}>
            <input type="text" placeholder="Usuário" />
            <input type="current-password" placeholder="Senha" />
            <a className="btnCriar">
              <img src="/img/log-in.svg" alt="Entrar no Meta Smart" />
              Entrar no meta smart
            </a>
            <a>Recuperar senha</a>
          </form>
        </section>
      </main>
    </Container>
  );
}
