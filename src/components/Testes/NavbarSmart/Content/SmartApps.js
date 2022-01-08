import React from 'react';
import Link from "next/link";
import { VscFeedback } from "react-icons/vsc";

import { SmartAppsContainer } from './styles';

const IconMetricas = <img src="/images/IconDashborard.svg" />

export const SmartApps = () => (
  <SmartAppsContainer>
    <ul className="primary">
      <li>
            <Link href="/BasedeConhecimento">
              <a>
              <img src="/icons/iconsSubMenu/iconsSmartApps/IconBasedeConhecimento.svg" />
             <div>
                <div>
                  <h3>Base de conhecimento</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p>Busca inteligente de processos e procedimentos </p>
              </div>
              </a>
            </Link>
      </li>
      <li>
          <Link href="/">
          <a>
          <img src="/icons/iconsSubMenu/iconsSmartApps/IconAudioteca.svg" />
              <div>
                <div>
                  <h3>Audioteca</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p>repositório com ligações para reforçar seu pit</p>
              </div>
              </a>
          </Link>
      </li>
      <li>
        <Link href="#">
        <a>
        <img src="/icons/iconsSubMenu/iconsSmartApps/IconGirodaSabedoria.svg" />
              <div>
                <div>
                  <h3>Giro da sabedoria</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p> produtividade, originação, upsell e atingimento.</p>
              </div>
            </a>
          </Link>
      </li>
      <li>
      
        <Link href="#">
        <a>
        <img src="/icons/iconsSubMenu/iconsSmartApps/IconSpif.svg" />
              <div>
                <div>
                  <h3>Campanha motivacional - SPIF</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p> acompanhar em tempo real sua pontuação no spif </p>
              </div>
              </a>
          </Link>
      </li>
      <li>
     
      <Link href="#">
      <a>
      <img src="/icons/iconsSubMenu/iconsSmartApps/IconScorecard.svg" />
            <div>
                <div>
                  <h3>Scorecard</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p> repositório com seus feedbacks de ligações </p>
            </div>
            </a>
          </Link>
      </li>
      <li>
     
        <Link href="#">
        <a>
        <img src="/icons/iconsSubMenu/iconsSmartApps/IconGlossarioPendencias.svg" />
              <div>
                <div>
                  <h3>Glossário de pendências</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p> dicas para evitar as pendências indesejadas  </p>
              </div>
              </a>
          </Link>
      </li>
      <li>
      
        <Link href="#">
        <a>
        <img src="/icons/iconsSubMenu/iconsSmartApps/IconCalcAmortizacao.svg" />
              <div>
                <div>
                  <h3>cálculo da amortização</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p> cálculo de amortização antecipada das parcelas  </p>
              </div>
              </a>
          </Link>
      </li>
      <li>
   
        <Link href="#">
        <a>
        <img src="/icons/iconsSubMenu/iconsSmartApps/IconMatrizArgumetacaoes.svg" />
              <div>
                <div>
                  <h3>Matriz de Argumentações</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p>dicas para contorno de objeções</p>
              </div>
              </a>
          </Link>
      </li>
      <li>
     
        <Link href="#">
        <a>
        <img src="/icons/iconsSubMenu/iconsSmartApps/IconTopPerformance.svg" />
              <div>
                <div>
                  <h3>Top Performance</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p>consultores que estão mandando super bem</p>
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
  
  </SmartAppsContainer>
);
