import React from 'react';
import Link from "next/link";
import { VscFeedback } from "react-icons/vsc";

import { SmartAppsContainer } from './styles';

const IconMetricas = <img src="/images/IconDashborard.svg" />

export const SmartApps = () => (
  <SmartAppsContainer>
    <ul className="primary">
      <li>
         <img src="/icons/iconsSubMenu/iconsSmartApps/IconAudioteca.svg" />
            <Link href="/contato">
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
        {/* <span className="billing" /> */}
        <img src="/icons/iconsSubMenu/iconsSmartApps/IconBuscaDetran.svg" />
          <Link href="/">
              <div>
                <div>
                  <h3>Busca sites do DETRAN</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p>localiza o site do DETRAN por estado</p>
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
      <img src="/icons/iconsSubMenu/iconsSmartApps/IconGirodaSabedoria.svg" />
        <Link href="#">
              <div>
                <div>
                  <h3>GIRO DA SABEDORIA</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p> produtividade, originação, upsell e atingimento.</p>
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
      <img src="/icons/iconsSubMenu/iconsSmartApps/IconLembrame.svg" />
        <Link href="#">
              <div>
                <div>
                  <h3>Lembra-me</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p> nunca mais esqueça daquele compromisso com o cliente</p>
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
      <img src="/icons/iconsSubMenu/iconsSmartApps/IconLocaldoChassi.svg" />
        <Link href="#">
              <div>
                <div>
                  <h3>Local do Chassi</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p> Identificação da localização do número do chassi </p>
              </div>
          </Link>
      </li>
      <li>
      <img src="/icons/iconsSubMenu/iconsSmartApps/IconMaterialApoio.svg" />
        <Link href="#">
              <div>
                <div>
                  <h3>Material de apoio</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p> scripts de ligação, Hashtags e nossos processos</p>
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
