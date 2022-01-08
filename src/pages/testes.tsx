import React, { FormEvent, useEffect, useState } from "react";
import CModal from "../components/CModal/modal.js";
import styled from "styled-components";

import { database } from "../services/firebase";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding-top: 25rem;

  > div {
    background: red;
  }
`;

const MainContainer = styled.div`
  .container-main {
    display: flex;
    justify-content: center;
    align-items: center;

    form {
      width: 500px;
      margin-right: 1rem;
      text-align: center;

      input,
      textarea {
        width: 100%;
        padding: 1rem;
        margin: 0.5rem 0;
        border: 1px solid rgba(0, 0, 0, 0.137);
        border-radius: 0.3rem;
      }
      textarea {
        resize: none;
      }
      button {
        padding: 0.8rem;
        width: 40%;
        background: rgba(195, 255, 56);
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
    .box-contact-main {
      width: 500px;
      padding: 1rem;
      background: rgba(237, 255, 194);
      height: 500px;
      text-align: center;
      border-radius: 0.5rem;
      margin-left: 5rem;
      overflow: auto;
      input {
        width: 100%;
        padding: 1rem;
        margin: 0.5rem 0;
        border: 1px solid rgba(0, 0, 0, 0.137);
        border-radius: 0.3rem;
      }
    }
    .box-cantact-unic-main {
      background: rgba(229, 240, 182);
      border-radius: 0.5rem;
      text-align: left;
      max-height: 200px;
      box-sizing: content-box;

      & + .box-cantact-unic-main {
        margin-top: 1rem;
      }

      .name-box-cantact-unic-main {
        font-size: 1.6rem;
        text-align: left;
        font-weight: bold;
        padding: 0.1rem 1rem;
      }
      .box-cantact-unic-actions-main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 1rem;

        a {
          color: red;
          cursor: pointer;
          margin-left: 0.5rem;
          &:hover {
            font-weight: bold;
          }
        }
      }
      .box-cantact-unic-data-main {
        padding: 0.5rem 1rem;
        p {
          margin: 0;
        }
      }
    }
  }
`;

type IContato = {
  chave: string;
  nome: string;
  email: string;
  telefone: string;
  obs: string;
};

function testes() {
  const [showModal, setShowModal] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [obs, setObs] = useState("");
  const [contatos, setContatos] = useState<IContato[]>();
  const [busca, setBusca] = useState<IContato[]>();
  const [busncando, setBuscando] = useState(false);
  const [chave, setChave] = useState("");
  const [updateButton, setUpdateButton] = useState(false);

  //chama toda a vez que a pagina e recarregada
  useEffect(() => {
    const refContatos = database.ref("contatos");

    refContatos.on("value", (result) => {
      console.log(result.val());
      const resultContatos = Object.entries<IContato>(result.val() ?? {}).map(
        ([chave, valor]) => {
          return {
            chave: chave,
            nome: valor.nome,
            email: valor.email,
            telefone: valor.telefone,
            obs: valor.obs,
          };
        }
      );
      setContatos(resultContatos);
    });
  }, []);

  function gravarDb(event: FormEvent) {
    event.preventDefault();

    const ref = database.ref("contatos");
    const dados = {
      nome,
      email,
      telefone,
      obs,
    };
    ref.push(dados);
    setNome("");
    setEmail("");
    setTelefone("");
    setObs("");
  }

  function deletar(ref: string) {
    const reference = database.ref(`contatos/${ref}`).remove();
  }

  function buscar(event: FormEvent | any) {
    const palavra = event.target.value;
    if (palavra.length > 0) {
      setBuscando(true);

      const dados = new Array();

      contatos?.map((contatos) => {
        const regra = new RegExp(event.target.value, "gi");
        if (regra.test(contatos.nome)) {
          dados.push(contatos);
        }
        setBusca(dados);
      });
    } else {
      setBuscando(false);
    }
  }

  function editarDados(contatos: IContato) {
    setUpdateButton(true);

    setChave(contatos.chave); //pega o id para atualizar

    setNome(contatos.nome);
    setEmail(contatos.email);
    setTelefone(contatos.telefone);
    setObs(contatos.obs);
  }

  function updateContatos() {
    const ref = database.ref("contatos");
    const dados = {
      nome: nome,
      email: email,
      telefone: telefone,
      obs: obs,
    };
    ref.child(chave).update(dados);

    setNome("");
    setEmail("");
    setTelefone("");
    setObs("");

    setUpdateButton(false);
  }

  return (
    <Container>
      <div>
        <button onClick={() => setShowModal(true)}>Open Modal</button>
      </div>
      <CModal
        onClose={() => setShowModal(false)}
        show={showModal}
        title="Cadastro"
      >
        <MainContainer>
          <main className="container-main">
            <form>
              <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <input
                type="email"
                placeholder="e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel"
                placeholder="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
              <textarea
                placeholder="Observações"
                value={obs}
                onChange={(e) => setObs(e.target.value)}
              ></textarea>
              {updateButton ? (
                <button type="button" onClick={updateContatos}>
                  Atualizar
                </button>
              ) : (
                <button type="button" onClick={gravarDb}>
                  Salvar
                </button>
              )}
            </form>
            <div className="box-contact-main">
              <input type="text" placeholder="Buscar" onChange={buscar} />
              {busncando
                ? busca?.map((contato) => {
                    return (
                      <div
                        key={contato.chave}
                        className="box-cantact-unic-main"
                      >
                        <div className="box-cantact-unic-actions-main">
                          <p className="name-box-cantact-unic-main">
                            {contato.nome}
                          </p>
                          <div>
                            <a onClick={() => editarDados(contato)}>Editar</a>
                            <a
                              onClick={() => {
                                deletar(contato.chave);
                              }}
                            >
                              Excluir
                            </a>
                          </div>
                        </div>
                        <div className="box-cantact-unic-data-main">
                          <p>{contato.email}</p>
                          <p>{contato.telefone}</p>
                          <p>{contato.obs}</p>
                        </div>
                      </div>
                    );
                  })
                : contatos?.map((contato) => {
                    return (
                      <div
                        key={contato.chave}
                        className="box-cantact-unic-main"
                      >
                        <div className="box-cantact-unic-actions-main">
                          <p className="name-box-cantact-unic-main">
                            {contato.nome}
                          </p>
                          <div>
                            <a onClick={() => editarDados(contato)}>Editar</a>
                            <a
                              onClick={() => {
                                deletar(contato.chave);
                              }}
                            >
                              Excluir
                            </a>
                          </div>
                        </div>
                        <div className="box-cantact-unic-data-main">
                          <p>{contato.email}</p>
                          <p>{contato.telefone}</p>
                          <p>{contato.obs}</p>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </main>
        </MainContainer>
      </CModal>
    </Container>
  );
}

export default testes;
