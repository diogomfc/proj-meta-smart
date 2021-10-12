import React from 'react';
import Link from "next/link";
import { VscFeedback } from "react-icons/vsc";

import { MetricasContainer } from './styles';

const IconMetricas = <img src="/images/IconDashborard.svg" />

export const Metricas = () => (
  <MetricasContainer>
    <ul className="primary">
      <li>
         <img src="/images/IconHistoricoDiario.svg" />
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
        <img src="/images/IconHistoricoMensal.svg" />
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
      <img src="/images/IconHistoricoDetalhado.svg" />
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
