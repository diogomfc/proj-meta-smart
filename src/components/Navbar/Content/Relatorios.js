import React from 'react';
import Link from "next/link";
import { VscFeedback } from "react-icons/vsc";

import { RelatoriosContainer } from './styles';

export const Relatorios = () => (
  <RelatoriosContainer>
    <ul className="primary">
      <li>
       
            <Link href="#">
            <a>
            <img src="/icons/iconsSubMenu/iconsRelatorios/IconRelatorioDia.svg" />
             <div>
                <div>
                  <h3>Relatório de produtividade diária</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p>pdf ou xls da sua produtividade diária</p>
              </div>
              </a>
            </Link>
      </li>
      <li>

          <Link href="#">
          <a>
          <img src="/icons/iconsSubMenu/iconsRelatorios/IconRelatorioMes.svg" />
              <div>
                <div>
                  <h3>Relatório de produtividade Mensal</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p>pdf ou xls da sua produtividade mensal</p>
              </div>
              </a>
          </Link>
      </li>
      <li>
  
        <Link href="#">
        <a>
        <img src="/icons/iconsSubMenu/iconsRelatorios/IconRelatorioDetalado.svg" />
              <div>
                <div>
                  <h3>Relatório detalhado</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p>pdf ou xls mensal da sua meta detalhada</p>
              </div>
              </a>
          </Link>
      </li>
    </ul>

    <ul className="secondary">
      <li>
        <div className="container-feedback">
          <div>
            <VscFeedback color="#202225" title="Feedback" size={25} />
          </div>
          <p>Ajuda o metaSmart fica cada vez melhor. Envie seu feedback e sugestões para diogomfc@hotmail.com</p> 
        </div>
      </li>
    </ul>
  
  </RelatoriosContainer>
);
