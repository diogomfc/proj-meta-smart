import React, { useState } from "react";
import Link from "next/link";
import Layouts from "../components/Layouts";
import ContentHeader from "../components/ContentHeader";
import Modal from "../components/Modals";
import CModal from "../components/CModal/modal.js";

import { Container, Header, Main, ModalWrapper } from "../styles/contatoStyle";

export default function Metricas() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Layouts>
        <Container>
          <Header>
            <ContentHeader
              title="Contato"
              subTitle="Testes paginas"
              lineColor="#11BB77"
            />
          </Header>
          <Main>
            <div className="actions">
              <a href="#" className="check">
                TESTE
              </a>
            </div>
            <div className="teste">
              <h1>DIOGO SILVA</h1>
              <h2>Davi Lucca</h2>
            </div>
          </Main>
        </Container>

        <div>
          <button onClick={() => setShowModal(true)}>Open Modal</button>
          <CModal
            onClose={() => setShowModal(false)}
            show={showModal}
            title="Diogo"
          >
            Hello from the modal!
          </CModal>
        </div>

        {/* MODAL */}
        <ModalWrapper>
          <div className="modal-wrapper">
            <Modal
              icon="/img/imgGlobo.svg"
              title="Adicionar link base de conhecimento"
              subTitle="Incluir link do processo, procedimento já publicado e revisado"
            >
              <main className="content-modal">
                <form className="form-modal" action="">
                  <div>
                    <input
                      type="text"
                      name="input-title"
                      id=""
                      placeholder="Título resumido do link"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="input-categoria"
                      id=""
                      placeholder="Categoria"
                    />
                    <input
                      type="text"
                      name="input-versionamento"
                      id=""
                      placeholder="Versionamento"
                    />
                    <input
                      type="date"
                      name="input-data"
                      id=""
                      placeholder="Data"
                    />
                    <input
                      type="text"
                      name="input-responsavel"
                      id=""
                      placeholder="Responsável"
                    />
                    <input
                      type="text"
                      name="input-status"
                      id=""
                      placeholder="Status"
                    />
                    <input
                      type="text"
                      name="input-icone"
                      id=""
                      placeholder="Icone"
                    />
                  </div>
                  <div className="btn-group">
                    <button className="btn-primary cancel" type="submit">
                      Cancelar
                    </button>
                    <button className="btn-secondary" type="submit">
                      Salvar
                    </button>
                  </div>
                </form>
              </main>
            </Modal>
          </div>
        </ModalWrapper>
      </Layouts>
    </div>
  );
}
