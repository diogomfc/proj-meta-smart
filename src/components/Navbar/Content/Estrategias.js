import React from 'react';
import Link from "next/link";
import { VscFeedback } from "react-icons/vsc";

import { EstrategiasContainer } from './styles';

export const Estrategias = () => (
  <EstrategiasContainer>
     <ul className="primary">
      <li>
            <Link href="#">
            <a>
            <img src="/icons/iconsSubMenu/iconsEstrategia/IconCadastroMeta.svg" />
             <div>
                <div>
                  <h3>Cadastro personalizado da meta</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p>defina estratégias com base nos resultados</p>
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
          <p>Ajuda o metaSmart fica cada vez melhor. Envie seu feedback e sugestões para diogo.silva@creditas.com</p> 
        </div>
      </li>
    </ul>
  
  </EstrategiasContainer>
);
