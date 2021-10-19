import React from "react";
import Link from "next/link";

import { Metricas, Relatorios, Estrategias, SmartApps } from "../Content";
import { DropdownProvider, DropdownOption, DropdownRoot } from "../Dropdown";
import { Container, DropdownStyles, MenuDrop } from "./styles";

const IconMetricas = <img src="/icons/iconsMenu/IconDashborard.svg" />;
const IconRelatorio = <img src="/icons/iconsMenu/IconRelatorio.svg" />;
const IconEstrategia = <img src="/icons/iconsMenu/IconEstrategia.svg" />;
const IconSmartApps = <img src="/icons/iconsMenu/IconSmartApps.svg" />;

function ContentHeader() {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
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
        </Container>
        <DropdownRoot />
      </DropdownStyles>
    </DropdownProvider>
  );
}

export default ContentHeader;
