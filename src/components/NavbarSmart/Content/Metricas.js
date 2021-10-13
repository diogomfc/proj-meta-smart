import React from 'react';
import Link from "next/link";
import { VscFeedback } from "react-icons/vsc";

import { MetricasContainer } from './styles';

const IconMetricas = <img src="/images/IconDashborard.svg" />

export const Metricas = () => (
  <MetricasContainer>
    <ul className="primary">
      <li>
         <img src="/icons/iconsSubMenu/iconsMetricas/IconHistoricoDiario.svg" />
            <Link href="/Users/metricasHistoricoDia">
             <div>
                <div>
                  <h3>Histórico Diário</h3>
                  <span className="new-tag">🚀 no ar</span>
                </div>
                <p>puxadas, carterizadas e originação </p>
              </div>
            </Link>
      </li>
      <li>
        {/* <span className="billing" /> */}
        <img src="/icons/iconsSubMenu/iconsMetricas/IconHistoricoMensal.svg" />
          <Link href="/Users/metricasMes">
              <div>
                <div>
                  <h3>Histórico Mensal</h3>
                  <span className="new-tag">🚀 no ar</span>
                </div>
                <p>puxadas, carterizadas e originação </p>
              </div>
          </Link>
      </li>
      <li>
      <img src="/icons/iconsSubMenu/iconsMetricas/IconHistoricoDetalhado.svg" />
        <Link href="#">
              <div>
                <div>
                  <h3>Histórico Detalhado</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p> produtividade, originação, upsell e atingimento.</p>
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
  
  </MetricasContainer>
);
