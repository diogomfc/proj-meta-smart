import Link from "next/link";

import Navebar from "../Navbar/ContentHeader";

import { ContainerHeader, Container, Logo, Menu, Perfil } from "./styles";

export default function CHeader() {
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
          <img src="/img/ImgAvatar.svg" alt="" />
          <div>
            <h1>
              Diogo Silva <p>moderador</p>
            </h1>
            <span>Consultor financeiro auto I </span>
          </div>

          <Link href="#">
            <div className="Notification">
              <img src="/img/imgSino.svg" alt="Notificação Atualização" />
              <div>
                <span>8</span>
              </div>
            </div>
          </Link>
          <Link href="/login">
            <div className="btmSair">
              <h1>Sair</h1>
            </div>
          </Link>
        </Perfil>
      </Container>
    </ContainerHeader>
  );
}
