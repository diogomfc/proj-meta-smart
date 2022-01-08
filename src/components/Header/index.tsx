import Link from "next/link";
import React, { FormEvent } from "react";
import { useAuth } from "../../hooks/useAuth";
import { firebase } from "../../services/dbMestasmasrt";
import { useRouter } from "next/router";

import Navebar from "../Navbar/ContentHeader";

import { ContainerHeader, Container, Logo, Menu, Perfil } from "./styles";

export default function CHeader() {
  const { signInWithGoogle, user } = useAuth();
  const router = useRouter();

  function useLogout() {
    router.push("/login");
    // const Logout = firebase
    //   .auth()
    //   .signOut()
    //   .then(() => {
    //     router.push("/login");
    //     console.log("Logout");
    //   })
    //   .catch((error) => {
    //     alert("Não foi possível fazer o Logout");
    //   });
  }

  function Logout() {
    console.log("Logout");
  }

  return (
    <ContainerHeader>
      <Container>
        <Logo>
          <img src="/img/Logo.svg" alt="Meta Smart" />
        </Logo>

        <Menu>
          <Navebar></Navebar>
        </Menu>

        <Perfil>
          <img src={user?.avatar} alt="" />
          <div>
            <h1>{user?.name}</h1>
            <span>Consultor financeiro auto I </span>
            <p>Admin</p>
          </div>

          <Link href="#">
            <div className="Notification">
              <img src="/img/imgSino.svg" alt="Notificação Atualização" />
              <div>
                <span>8</span>
              </div>
            </div>
          </Link>
          <button onClick={useLogout}>
            <div className="btmSair">
              <h1>Sair</h1>
            </div>
          </button>
        </Perfil>
      </Container>
    </ContainerHeader>
  );
}
