import React from "react";
import Link from "next/link";

import { Metricas, Relatorios, Estrategias, SmartApps } from "../Content";
import { DropdownProvider, DropdownOption, DropdownRoot } from "../Dropdown";
import { Container, DropdownStyles, Perfil, MenuDrop, Logo } from "./styles";

const IconMetricas = <img src="/icons/iconsMenu/IconDashborard.svg" />;
const IconRelatorio = <img src="/icons/iconsMenu/IconRelatorio.svg" />;
const IconEstrategia = <img src="/icons/iconsMenu/IconEstrategia.svg" />;
const IconSmartApps = <img src="/icons/iconsMenu/IconSmartApps.svg" />;

function ContentHeader() {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <Logo>
            <img src="/img/Logo.svg" alt="Meta Smart" />
          </Logo>

          <MenuDrop>
            <ul>
              <li>
                <DropdownOption
                  icon={IconMetricas}
                  name="Métricas"
                  content={Metricas}
                />
              </li>
              <li>
                <DropdownOption
                  icon={IconRelatorio}
                  name="Relatórios"
                  content={Relatorios}
                />
              </li>
              <li>
                <DropdownOption
                  icon={IconEstrategia}
                  name="Estratégia"
                  content={Estrategias}
                />
              </li>
              <li>
                <DropdownOption
                  icon={IconSmartApps}
                  name="Smart Apps"
                  content={SmartApps}
                />
              </li>
            </ul>
          </MenuDrop>

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
        <DropdownRoot />
      </DropdownStyles>
    </DropdownProvider>
  );
}

export default ContentHeader;
