import React from 'react';
import Link from "next/link";
import { VscFeedback } from "react-icons/vsc";

import { SmartAppsContainer } from './styles';

const IconMetricas = <img src="/images/IconDashborard.svg" />

export const SmartApps = () => (
  <SmartAppsContainer>
    <ul className="primary">
      <li>
         <img src="/icons/iconsSubMenu/iconsSmartApps/IconBasedeConhecimento.svg" />
            <Link href="/contato">
             <div>
                <div>
                  <h3>Base de conhecimento</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p>Busca inteligente de processos e procedimentos </p>
              </div>
            </Link>
      </li>
      <li>
        <img src="/icons/iconsSubMenu/iconsSmartApps/iconAudioteca.svg" />
          <Link href="/">
              <div>
                <div>
                  <h3>Audioteca</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p>repositório com ligações para reforçar seu pit</p>
              </div>
          </Link>
      </li>
      <li>
      <img src="/icons/iconsSubMenu/iconsSmartApps/IconGirodaSabedoria.svg" />
        <Link href="#">
              <div>
                <div>
                  <h3>Giro da sabedoria</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p> produtividade, originação, upsell e atingimento.</p>
              </div>
          </Link>
      </li>
      <li>
      <img src="/icons/iconsSubMenu/iconsSmartApps/IconSpif.svg" />
        <Link href="#">
              <div>
                <div>
                  <h3>Campanha motivacional - SPIF</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p> acompanhar em tempo real sua pontuação no spif </p>
              </div>
          </Link>
      </li>
      <li>
      <img src="/icons/iconsSubMenu/iconsSmartApps/IconScorecard.svg" />
      <Link href="#">
            <div>
                <div>
                  <h3>Scorecard</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p> repositório com seus feedbacks de ligações </p>
            </div>
          </Link>
      </li>
      <li>
      <img src="/icons/iconsSubMenu/iconsSmartApps/IconGlossarioPendencias.svg" />
        <Link href="#">
              <div>
                <div>
                  <h3>Glossário de pendências</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p> dicas para evitar as pendências indesejadas  </p>
              </div>
          </Link>
      </li>
      <li>
      <img src="/icons/iconsSubMenu/iconsSmartApps/IconCalcAmortizacao.svg" />
        <Link href="#">
              <div>
                <div>
                  <h3>cálculo da amortização</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p> cálculo de amortização antecipada das parcelas  </p>
              </div>
          </Link>
      </li>
      <li>
      <img src="/icons/iconsSubMenu/iconsSmartApps/IconMatrizArgumetacaoes.svg" />
        <Link href="#">
              <div>
                <div>
                  <h3>Matriz de Argumentações</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p>dicas para contorno de objeções</p>
              </div>
          </Link>
      </li>
      <li>
      <img src="/icons/iconsSubMenu/iconsSmartApps/iconTopPerformance.svg" />
        <Link href="#">
              <div>
                <div>
                  <h3>Top Performance</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p>consultores que estão mandando super bem</p>
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
  
  </SmartAppsContainer>
);
