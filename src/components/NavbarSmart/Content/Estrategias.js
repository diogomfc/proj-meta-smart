import React from 'react';
import Link from "next/link";
import { VscFeedback } from "react-icons/vsc";

import { EstrategiasContainer } from './styles';

export const Estrategias = () => (
  <EstrategiasContainer>
     <ul className="primary">
      
      <li>
         <img src="/images/iconsEstrategia/IconCadastroMeta.svg" />
            <Link href="#">
             <div>
                <div>
                  <h3>Cadastro personalizado da meta</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p>defina estratégias com base nos últimos resultados</p>
              </div>
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
