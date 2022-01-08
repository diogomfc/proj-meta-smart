import React, { useState, FormEvent, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import Layouts from "../components/Layouts";
import ContentHeader from "../components/ContentHeader";
import CardListBC from "../components/BoxCards/CardListBC";
import Modal from "../components/Modals/Modals";
import MDCommits from "../components/Modals/Commits";
import ListagemCommits from "../components/Modals/ListagemCommits";

//firebase
import { database, dbFirestore, firebase } from "../services/dbMestasmasrt";
import { useAuth } from "../hooks/useAuth";

const iconLink = "/icons/iconsBaseC/confluence.svg"; //Confluence
const iconWord = "/icons/iconsBaseC/iconWord.svg"; // Word
const iconExcel = "/icons/iconsBaseC/iconExcel.svg"; // Excel
const iconAudio = "/icons/iconsBaseC/iconAudio.svg"; // Áudio
const iconPdf = "/icons/iconsBaseC/iconPdf.svg"; // PDF
const iconDrive = "/icons/iconsBaseC/iconDrive.svg"; // Drive
const iconVideo = "/icons/iconsBaseC/iconGiroSabedoria.svg"; // Video

const tagAprovado = "/icons/iconsBaseC/tagAprovado.svg";
const tagRevisando = "/icons/iconsBaseC/tagRevisando.svg";
const tagDescontinuado = "/icons/iconsBaseC/tagDescontinuado.svg";

import {
  Container,
  HeaderBase,
  FiltroPesquisa,
  Main,
  ContentListagemLinks,
  ContentListagemNoresult,
  ModalWrapper,
} from "../styles/baseStyle";

//Tipagem para os liks
type ICadastroLinks = {
  chaveId: string;
  userId: string;
  userName: string;
  title: string;
  link: string;
  linkCategoria: string;
  linkVersionamento: string;
  linkData: string;
  linkRvisadoPor: string;
  linkStatus: string;
  linkIcons: string;
  likeCount: string;
  commitCount?: string;
  // likesLinkCount: number;
  // likeLinkId: string | undefined;
  // userNameLikes: void;
};

//Tipagem para os liks do firebase
type FirebaseCadastroLinks = Record<
  string,
  {
    userId: string;
    userName: string;
    title: string;
    link: string;
    linkCategoria: string;
    linkVersionamento: string;
    linkData: string;
    linkRvisadoPor: string;
    linkStatus: string;
    linkIcons: string;
    likesLinkCount: number;
    likesLink: Record<
      string,
      {
        userIdLikes: string;
        userNameLikes: string;
      }
    >;
  }
>;

//Tipagem para os liks do firebase
type FirebaseCadastroLikes = {
  id: string;
  userIdLikes: string;
  userNameLikes: string;
};

//Tipagem para os commits
type IFbCommitsLinks = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  commitDestacado: boolean;
  commitResposta: boolean;
  likesCount?: number;
  checkLiked?: boolean;
  likes?: Record<
    string,
    {
      authorId: string;
    }
  >;
};

type IFbCommits = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    commitDestacado: boolean;
    commitResposta: boolean;
    likes: Record<
      string,
      {
        authorId: string;
      }
    >;
  }
>;

function BasedeConhecimento() {
  //UseState que guarda os valores dos cadastros links
  const [chaveId, setChave] = useState("");
  const [chaveSId, setChaveSId] = useState("");
  const [linkLink, setlinkLink] = useState("");
  const [linkTitulo, setlinkTitulo] = useState("");
  const [linkCategoria, setCategoria] = useState("");
  const [linkVersionamento, setlinkVersionamento] = useState("");
  const [linkData, setlinkData] = useState("");
  const [linkRvisadoPor, setlinkRvisadoPor] = useState("");
  const [linkStatus, setlinkStatus] = useState("");
  const [linkIcons, setlinkIcons] = useState("");
  const [likeCount, setLikeCount] = useState("");

  //UseState que guarda os valores dos cadastros de commits
  const [commitId, setcommitId] = useState("");
  const [commitContent, setCommitContent] = useState("");
  const [commitDestacado, setCommitDestacado] = useState(false);
  const [commitResposta, setCommitResposta] = useState(false);
  const [commitAuthorNome, setCommitAuthorNome] = useState("");
  const [commiAuthorAvatar, setCommiAuthorAvatar] = useState("");
  const [linkCommit, setlinkCommit] = useState("");
  const [qtdCommit, setqtdCommit] = useState<Number>();
  const [qtdLikes, setQtdLikes] = useState<Number>();
  const [qtdViews, setQtdViews] = useState("");
  const [count, setCount] = useState("");

  //useState para mudar botão cadastro / atualizar
  const [updateButton, setUpdateButton] = useState(false);

  //função do firebase autenticação e fireSotre
  const { user } = useAuth();
  const IDd = "-MoU9yG9c8qkdozaAO_D";
  const linkRef = database.ref("dblinks/");
  const likesRef = database.ref(`dblinks/${chaveId}/likes`);

  const commitsRef = database.ref(`dblinks/${chaveId}/commits`);

  //useState para Guardar um array dos cadastros de Links
  const [dbCadastroLinks, setDbCadastroLinks] = useState<ICadastroLinks[]>([]);
  const [busca, setBusca] = useState<ICadastroLinks[]>();
  const [busncando, setBuscando] = useState(false);

  //useState para Guardar um array dos cadastros de Commits
  const [dbCadastroCommits, setDbCadastroCommits] = useState<IFbCommitsLinks[]>(
    []
  );
  const [dbGeral, setdbGeral] = useState<IFbCommitsLinks[]>([]);

  // Cadastro de Likes
  const [dbLikes, setDbLikes] = useState<FirebaseCadastroLikes[]>([]);

  //UseEffects de atualização dos dados pós carregamento
  //UseEffects do commit
  useEffect(() => {
    commitsRef.on("value", (commits) => {
      const resultCadastroCommits = Object.entries<IFbCommitsLinks>(
        commits.val() ?? {}
      ).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          commitDestacado: value.commitDestacado,
          commitResposta: value.commitResposta,
          likesCount: Object.values(value.likes ?? {}).length,
          checkLiked: Object.values(value.likes ?? {}).some(
            (like) => like.authorId === user?.id
          ),
        };
      });

      setDbCadastroCommits(resultCadastroCommits);
      setqtdCommit(resultCadastroCommits.length);

      //console.log(`Log Cadastro useEffect Commits - ${resultCadastroCommits}`);
    });
    return () => {
      commitsRef.off("value");
    };
  }, [chaveId, user?.id]);

  //const testes = database.ref(`dblinks/${chaveId}/commits/${commitId}/likes`);
  //UseEffects do links
  useEffect(() => {
    linkRef.on("value", (result) => {
      const resultCadastroLinks = Object.entries<ICadastroLinks>(
        result.val() ?? {}
      ).map(([chave, dbLink]) => {
        return {
          chaveId: chave,
          userId: dbLink.userId,
          userName: dbLink.userName,
          title: dbLink.title,
          link: dbLink.link,
          linkCategoria: dbLink.linkCategoria,
          linkVersionamento: dbLink.linkVersionamento,
          linkData: dbLink.linkData,
          linkRvisadoPor: dbLink.linkRvisadoPor,
          linkStatus: dbLink.linkStatus,
          linkIcons: dbLink.linkIcons,
          likeCount: dbLink.likeCount,
        };
      });
      setDbCadastroLinks(resultCadastroLinks);

      //console.log(`Log Cadastro useEffect links- ${testes}`);
    });
    return () => {
      linkRef.off("value");
    };
  }, []);

  const toastError = () =>
    toast.error("Você não tem permissão.", {
      style: {
        fontSize: 16,
        background: "#F84F6B",
        color: "#000",
      },
    });

  const toastSuccess = () =>
    toast.success("Confirmado.", {
      style: {
        fontSize: 16,
        background: "#49E295",
        color: "#000",
      },
    });

  //Modal de mensagens
  //Mensagem de confirmação da atualização
  function ModalMsgConfirmaAtulizado() {
    document
      .querySelector(".modal-msg-confirma-atualizado")
      .classList.add("active");
    document.querySelector(".modal-msg-confirma").classList.remove("active");
    document.querySelector(".modal-wrapper").classList.remove("active");
  }

  //Chamada da modal pós cadastro ativando modals
  function ModalMsgConfirma() {
    document.querySelector(".modal-msg-confirma").classList.add("active");
    document.querySelector(".modal-wrapper").classList.remove("active");
    document
      .querySelector(".modal-msg-confirma-atualizado")
      .classList.remove("active");
  }

  //Chamada da Modal para fechamento
  function ModalClose() {
    document.querySelector(".modal-commits").classList.remove("active");
    document.querySelector(".modal-wrapper").classList.remove("active");
    document.querySelector(".modal-msg-confirma").classList.remove("active");
    document
      .querySelector(".modal-msg-confirma-atualizado")
      .classList.remove("active");
  }

  //Chamada da modal de cadastro
  function ModalOpen() {
    document.querySelector(".modal-wrapper").classList.add("active");
    document.querySelector(".modal-msg-confirma").classList.remove("active");
    document
      .querySelector(".modal-msg-confirma-atualizado")
      .classList.remove("active");

    setlinkLink("");
    setlinkTitulo("");
    setCategoria("");
    setlinkVersionamento("");
    setlinkData("");
    setlinkRvisadoPor("");
    setlinkStatus("");
    setlinkIcons("");
  }

  //Cadastro commits, links e links
  async function cadastroLink(event: FormEvent) {
    event.preventDefault();
    if (
      (linkLink.trim(),
      linkTitulo.trim(),
      linkCategoria.trim(),
      linkVersionamento.trim(),
      linkData.trim(),
      linkRvisadoPor.trim(),
      linkStatus.trim(),
      linkIcons.trim() === "")
    ) {
      //alert("Não foi possível o cadastro. pois existe compos em branco.");
      return;
    }

    const firebaseDbLinks = await linkRef.push({
      userId: user?.id,
      userName: user?.name,
      title: linkTitulo,
      link: linkLink,
      linkCategoria: linkCategoria,
      linkVersionamento: linkVersionamento,
      linkData: linkData,
      linkRvisadoPor: linkRvisadoPor,
      linkStatus: linkStatus,
      linkIcons: linkIcons,
    });
    {
      ModalMsgConfirma();
    }
  }

  async function cadastroCommits(event: FormEvent) {
    event.preventDefault();

    if (linkCommit === "") {
      return;
    }

    const commits = {
      content: linkCommit,
      author: {
        name: user?.name,
        avatar: user?.avatar,
      },
      commitDestacado: false,
      commitResposta: false,
    };

    await database.ref(`dblinks/${chaveId}/commits`).push(commits);

    setlinkCommit("");

    console.log(`Log Cadastro commits - ${chaveId}`);
  }

  //Likes Commits
  async function likeCommits(commitId: string) {
    await database.ref(`dblinks/${chaveId}/commits/${commitId}/likes`).push({
      authorId: user?.id,
    });
  }

  //Links Likes
  async function likeLinks(chaveId: string) {
    await database.ref(`dblinks/${chaveId}/likes`).push({
      userIdLikes: user?.id,
      userNameLikes: user?.name,
    });
  }

  async function likeLs(chaveId: string) {
    await database.ref(`dblinks/${chaveId}/likes`).push({
      userIdLikes: user?.id,
      userNameLikes: user?.name,
    });
  }

  //Excluir link / Commits
  function deletarCadastroLink(ref: string) {
    const res = window.confirm("Deseje realmente remover o link?");
    if (res == true) {
      const reference = database.ref(`dblinks/${ref}`).remove();
    }
    return;
  }

  //Editar link / Commits
  function editarDados(dbCadastroLinks: ICadastroLinks) {
    document.querySelector(".modal-wrapper").classList.add("active");

    setUpdateButton(true);

    setChave(dbCadastroLinks.chaveId); //pega o id para atualizar

    setlinkLink(dbCadastroLinks.link);
    setlinkTitulo(dbCadastroLinks.title);
    setCategoria(dbCadastroLinks.linkCategoria);
    setlinkVersionamento(dbCadastroLinks.linkVersionamento);
    setlinkData(dbCadastroLinks.linkData);
    setlinkRvisadoPor(dbCadastroLinks.linkRvisadoPor);
    setlinkStatus(dbCadastroLinks.linkStatus);
    setlinkIcons(dbCadastroLinks.linkIcons);
  }

  // Update link / Commits
  function updateCadastroLink() {
    const dados = {
      userId: user?.id,
      userName: user?.name,
      title: linkTitulo,
      link: linkLink,
      linkCategoria: linkCategoria,
      linkVersionamento: linkVersionamento,
      linkData: linkData,
      linkRvisadoPor: linkRvisadoPor,
      linkStatus: linkStatus,
      linkIcons: linkIcons,
    };
    linkRef.child(chaveId).update(dados);

    setlinkLink("");
    setlinkTitulo("");
    //setCategoria("");
    setlinkVersionamento("");
    setlinkData("");
    setlinkRvisadoPor("");
    setlinkStatus("");
    setlinkIcons("");

    setUpdateButton(false);

    {
      ModalMsgConfirmaAtulizado();
    }
  }

  //Filtros link / commits
  function buscar(event: FormEvent | any) {
    const palavra = event.target.value;

    if (palavra.length > 0) {
      setBuscando(true);

      const dados = new Array();

      dbCadastroLinks?.map((cadastroLinks) => {
        const regra = new RegExp(event.target.value, "gi");
        if (regra.test(cadastroLinks.title)) {
          dados.push(cadastroLinks);
        }
        setBusca(dados);
      });
    } else {
      setBuscando(false);
    }
  }

  function filtro(event: FormEvent | any) {
    const palavra = event.target.value;

    if (palavra.length > 0) {
      setBuscando(true);

      const dados = new Array();

      dbCadastroLinks?.map((cadastroLinks) => {
        const regra = new RegExp(event.target.value, "gi");
        if (regra.test(cadastroLinks.linkCategoria)) {
          dados.push(cadastroLinks);
        }
        setBusca(dados);
      });
    } else {
      setBuscando(false);
    }
  }

  //Carregar dados para modal commits
  function mCommits(dbCadastroLinks: ICadastroLinks) {
    document.querySelector(".modal-commits").classList.add("active");

    //setUpdateButton(true);

    setChave(dbCadastroLinks.chaveId); //pega o id para atualizar

    setlinkLink(dbCadastroLinks.link);
    setlinkTitulo(dbCadastroLinks.title);
    setCategoria(dbCadastroLinks.linkCategoria);
    setlinkVersionamento(dbCadastroLinks.linkVersionamento);
    setlinkData(dbCadastroLinks.linkData);
    setlinkRvisadoPor(dbCadastroLinks.linkRvisadoPor);
    setlinkStatus(dbCadastroLinks.linkStatus);
    setlinkIcons(dbCadastroLinks.linkIcons);

    console.log(linkTitulo);
  }

  function qtdLikesViews(dbCadastroLinks: ICadastroLinks) {
    setChave(dbCadastroLinks.chaveId); //pega o id para atualizar
    console.log(dbCadastroLinks);
  }

  // Create document function
  const incrementLikes = async (chaveId: string) => {
    const likesRef = database.ref(`dblinks/${chaveId}/likeCount`);

    const { snapshot } = await likesRef.transaction((count) => {
      if (count === null) {
        return 1;
      }

      return count + 1;
    });

    console.log(snapshot.val());
  };

  return (
    <div>
      <Layouts>
        <Container>
          <HeaderBase>
            <ContentHeader
              title="Smart Apps"
              subTitle="Base de Conhecimento"
              lineColor="#11BB77"
            />
          </HeaderBase>

          <FiltroPesquisa>
            <section id="inputs-pesquisa">
              <form className="form-pesquisa" onSubmit={buscar}>
                <select className="input-filtro" onChange={filtro}>
                  <option value="">Filtrar por categoria</option>
                  <option value="Pós Crédito">Pós Crédito</option>
                  <option value="Processamento">Processamento</option>
                  <option value="TopUp">TopUp</option>
                  <option value="Auto Refin">Auto Refin</option>
                </select>
                <input
                  className="input-pesquisa"
                  type="text"
                  placeholder="Pesquisar por palavra chave. Ex: Cadência"
                  onChange={buscar}
                />

                {user?.name === "Diogo Silva" ? (
                  <button
                    className="btn-adicionar"
                    type="button"
                    onClick={() => ModalOpen()}
                  >
                    Adicionar
                  </button>
                ) : (
                  <>
                    <button
                      className="btn-adicionar"
                      type="button"
                      onClick={toastError}
                    >
                      Adicionar
                    </button>
                  </>
                )}
              </form>
            </section>
          </FiltroPesquisa>

          <Main>
            <ContentListagemLinks className="main-content-result active">
              <div className="TitleCategoria">
                <h2>CATEGORIA</h2>
              </div>
              <div className="TitleRevisao">
                <h2>REVISÃO</h2>
              </div>
              <div className="TitleData">
                <h2>DATA</h2>
              </div>
              <div className="TitleRevisadoPor">
                <h2>REVISADO POR</h2>
              </div>
              <div className="TitleTitle">
                <h2>TÍTULO</h2>
              </div>
              <div className="TitleAcoes">
                <h2>AÇÕES</h2>
              </div>
              <div className="AreaListagemCadastro">
                {busncando
                  ? busca?.map((dbCadastroLinks) => {
                      return (
                        <div key={dbCadastroLinks.chaveId}>
                          <CardListBC
                            tagColor={
                              dbCadastroLinks.linkStatus === "Aprovado"
                                ? "#12f04273"
                                : dbCadastroLinks.linkStatus === "Negado"
                                ? "#F84F6B"
                                : "#FFD480"
                            }
                            linkCategoria={dbCadastroLinks.linkCategoria}
                            linkRevisao={dbCadastroLinks.linkVersionamento}
                            linkData={dbCadastroLinks.linkData}
                            linkRevisadoPor={dbCadastroLinks.linkRvisadoPor}
                            iconTitulo={
                              dbCadastroLinks.linkIcons === "Link"
                                ? iconLink
                                : dbCadastroLinks.linkIcons === "Word"
                                ? iconWord
                                : dbCadastroLinks.linkIcons === "Excel"
                                ? iconExcel
                                : dbCadastroLinks.linkIcons === "Audio"
                                ? iconAudio
                                : dbCadastroLinks.linkIcons === "PDF"
                                ? iconPdf
                                : dbCadastroLinks.linkIcons === "Drive"
                                ? iconDrive
                                : dbCadastroLinks.linkIcons === "Video"
                                ? iconVideo
                                : iconLink
                            }
                            linkTitulo={dbCadastroLinks.title}
                            link={dbCadastroLinks.link}
                            iconViews="/icons/iconsBaseC/iconQdViews.svg"
                            qtdViews={
                              dbCadastroLinks.likeCount
                                ? dbCadastroLinks.likeCount
                                : "0"
                            }
                            linkViews={() => likeLinks(dbCadastroLinks.chaveId)}
                            iconCommit="/icons/iconsBaseC/iconCommit.svg"
                            qtdCommit={() => {}}
                            linkCommit={() => {
                              mCommits(dbCadastroLinks);
                            }}
                            iconCompartilhar="/icons/iconsBaseC/iconCompartilhar.svg"
                            qtdCompartilhar={0}
                            linkCompartilhar={() => {}}
                            iconEdit="/icons/iconsBaseC/iconEdit.svg"
                            linkEdit={() => {
                              editarDados(dbCadastroLinks);
                            }}
                            iconDelete="/icons/iconsBaseC/iconDelet.svg"
                            linkDelete={() => {
                              deletarCadastroLink(dbCadastroLinks.chaveId);
                            }}
                          />
                        </div>
                      );
                    })
                  : dbCadastroLinks?.map((dbCadastroLinks) => {
                      // console.log(
                      //   `LIKES VIEWS - ${dbCadastroLinks.linkStatus}`
                      // );
                      return (
                        <div key={dbCadastroLinks.chaveId}>
                          <CardListBC
                            tagColor={
                              dbCadastroLinks.linkStatus === "Aprovado"
                                ? "#12f04273"
                                : dbCadastroLinks.linkStatus === "Negado"
                                ? "#F84F6B"
                                : "#FFD480"
                            }
                            linkCategoria={dbCadastroLinks.linkCategoria}
                            linkRevisao={dbCadastroLinks.linkVersionamento}
                            linkData={dbCadastroLinks.linkData}
                            linkRevisadoPor={dbCadastroLinks.linkRvisadoPor}
                            iconTitulo={
                              dbCadastroLinks.linkIcons === "Link"
                                ? iconLink
                                : dbCadastroLinks.linkIcons === "Word"
                                ? iconWord
                                : dbCadastroLinks.linkIcons === "Excel"
                                ? iconExcel
                                : dbCadastroLinks.linkIcons === "Audio"
                                ? iconAudio
                                : dbCadastroLinks.linkIcons === "PDF"
                                ? iconPdf
                                : dbCadastroLinks.linkIcons === "Drive"
                                ? iconDrive
                                : dbCadastroLinks.linkIcons === "Video"
                                ? iconVideo
                                : iconLink
                            }
                            linkTitulo={dbCadastroLinks.title}
                            link={dbCadastroLinks.link}
                            iconViews="/icons/iconsBaseC/iconQdViews.svg"
                            qtdViews={
                              dbCadastroLinks.likeCount
                                ? dbCadastroLinks.likeCount
                                : "0"
                            }
                            linkViews={() => {
                              incrementLikes(dbCadastroLinks.chaveId);
                            }}
                            iconCommit="/icons/iconsBaseC/iconCommit.svg"
                            qtdCommit={() => {}}
                            linkCommit={() => {
                              mCommits(dbCadastroLinks);
                            }}
                            iconCompartilhar="/icons/iconsBaseC/iconCompartilhar.svg"
                            qtdCompartilhar={0}
                            linkCompartilhar={() => {}}
                            iconEdit="/icons/iconsBaseC/iconEdit.svg"
                            linkEdit={() => {
                              editarDados(dbCadastroLinks);
                            }}
                            iconDelete="/icons/iconsBaseC/iconDelet.svg"
                            linkDelete={() => {
                              deletarCadastroLink(dbCadastroLinks.chaveId);
                            }}
                          />
                        </div>
                      );
                    })}
              </div>
            </ContentListagemLinks>

            <ContentListagemNoresult className="main-content-noresult">
              <img src="/img/ImgAlertaResult.svg" />
              <p>Nenhuma resultado por aqui...</p>
              <span>
                Criamos um ambiente dedicado para que você possa evoluir de
                forma
                <br />
                contínua e se manter atualizado com nossos processos e <br />{" "}
                procedimentos.
              </span>
              <div>
                <h1>Faça sua pesquisa por palavras chave.</h1>
                <img src="/img/imgPesquisar.svg" />
              </div>
              <span>
                Lembre-se de compartilhar seu conhecimento, contamos com você.
              </span>
            </ContentListagemNoresult>
          </Main>
        </Container>

        {/* MODALs */}
        {/* modal cadastro */}
        <ModalWrapper>
          <div className="modal-wrapper">
            <Modal
              icon="/img/imgAddLink.svg"
              title="Adicionar link base de conhecimento"
              subTitle="Incluir link do processo, procedimento já publicado e revisado"
            >
              <main className="content-modal">
                <form className="form-modal" onSubmit={cadastroLink}>
                  <div>
                    <input
                      type="text"
                      name="input-link"
                      onChange={(event) => setlinkLink(event.target.value)}
                      value={linkLink}
                      placeholder="Origem, endereço do link"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="input-title"
                      onChange={(event) => setlinkTitulo(event.target.value)}
                      value={linkTitulo}
                      placeholder="Título resumido do link"
                    />
                  </div>
                  <div>
                    <select
                      name="Categorias"
                      onChange={(event) => setCategoria(event.target.value)}
                      value={linkCategoria}
                    >
                      <option value="" disabled>
                        Categoria
                      </option>
                      <option value="Pós Crédito">Pós Crédito</option>
                      <option value="Processamento">Processamento</option>
                      <option value="TopUp">TopUp</option>
                      <option value="Auto Refin">Auto Refin</option>
                    </select>
                    <select
                      name="Versionamento"
                      onChange={(event) =>
                        setlinkVersionamento(event.target.value)
                      }
                      value={linkVersionamento}
                    >
                      <option value="" disabled>
                        Versão
                      </option>
                      <option value="1.0">1.0</option>
                      <option value="2.0">2.0</option>
                      <option value="3.0">3.0</option>
                      <option value="4.0">4.0</option>
                    </select>
                    <input
                      type="date"
                      name="input-data"
                      onChange={(event) => setlinkData(event.target.value)}
                      value={linkData}
                      placeholder="Data"
                    />
                    <input
                      type="text"
                      name="input-responsavel"
                      onChange={(event) =>
                        setlinkRvisadoPor(event.target.value)
                      }
                      value={linkRvisadoPor}
                      placeholder="Responsável"
                    />
                    <select
                      name="input-status"
                      onChange={(event) => setlinkStatus(event.target.value)}
                      value={linkStatus}
                    >
                      <option value="" disabled>
                        Status
                      </option>
                      <option value="Aprovado">Aprovado</option>
                      <option value="Negado">Negado</option>
                      <option value="Revisando">Revisando</option>
                    </select>
                    <select
                      name="Icones"
                      onChange={(event) => setlinkIcons(event.target.value)}
                      value={linkIcons}
                    >
                      <option value="" disabled>
                        Tipo
                      </option>
                      <option value="Link">Link - Confluence</option>
                      <option value="Word">Word</option>
                      <option value="Excel">Excel</option>
                      <option value="PDF">PDF</option>
                      <option value="Audio">Áudio</option>
                      <option value="Video">Vídeo</option>
                      <option value="Drive">Drive</option>
                    </select>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn-primary cancel"
                      type="button"
                      onClick={ModalClose}
                    >
                      Cancelar
                    </button>
                    {updateButton ? (
                      <button
                        className="btn-secondary"
                        type="button"
                        onClick={updateCadastroLink}
                      >
                        Atualizar
                      </button>
                    ) : (
                      <button
                        className="btn-secondary"
                        type="submit"
                        onClick={cadastroLink}
                      >
                        Salvar
                      </button>
                    )}
                  </div>
                </form>
              </main>
            </Modal>
          </div>

          {/* modal mensagem confirmado */}
          <div className="modal-msg-confirma">
            <Modal
              icon="/img/imglinkSalvo.svg"
              title="Link salvo com sucesso."
              subTitle={`Link Cadastrado: ${linkTitulo}`}
            >
              <div className="modal-content-msg-confirma">
                <h2> Deseja adicionar outro link?</h2>

                <div className="btn-group">
                  <button
                    className="btn-primary cancel"
                    type="submit"
                    onClick={ModalClose}
                  >
                    Cancelar
                  </button>
                  <button
                    className="btn-secondary"
                    type="submit"
                    onClick={ModalOpen}
                  >
                    Cadastrar
                  </button>
                </div>
              </div>
            </Modal>
          </div>

          {/* modal mensagem atualizado */}
          <div className="modal-msg-confirma-atualizado">
            <Modal
              icon="/img/imglinkSalvo.svg"
              title="Cadastro atualizado com sucesso."
            >
              <div className="modal-content-msg-confirma-atualizado">
                <div className="btn-group">
                  <button
                    className="btn-primary cancel"
                    type="submit"
                    onClick={ModalClose}
                  >
                    OK
                  </button>
                </div>
              </div>
            </Modal>
          </div>

          {/* modal commits */}
          <div className="modal-commits">
            <MDCommits
              buttonClose={ModalClose}
              link={linkLink}
              iconTitulo={
                linkIcons === "Link"
                  ? iconLink
                  : linkIcons === "Word"
                  ? iconWord
                  : linkIcons === "Excel"
                  ? iconExcel
                  : linkIcons === "Audio"
                  ? iconAudio
                  : linkIcons === "PDF"
                  ? iconPdf
                  : linkIcons === "Drive"
                  ? iconDrive
                  : linkIcons === "Video"
                  ? iconVideo
                  : iconLink
              }
              title={linkTitulo}
              linkCategoria={linkCategoria}
              linkVersionamento={`V ${linkVersionamento}`}
              linkData={linkData}
              linkRvisadoPor={linkRvisadoPor}
              tagStatus={
                linkStatus === "Aprovado"
                  ? tagAprovado
                  : linkStatus === "Negado"
                  ? tagDescontinuado
                  : tagRevisando
              }
              qtdCommit={qtdCommit}
              userName={user?.name}
              userAvatar={user?.avatar}
              textareaOnChange={(event: {
                target: { value: React.SetStateAction<string> };
              }) => setlinkCommit(event.target.value)}
              textareaValue={linkCommit}
              buttonOnClick={cadastroCommits}
              formOnSubmit={cadastroCommits}
            >
              <div
                className={`listagem-commits ${
                  qtdCommit > 0 ? "active-scrollbar" : ""
                }`}
              >
                {dbCadastroCommits?.map((dbCadastroCommits) => {
                  console.log(`TESTE LINKED ${dbCadastroCommits.likesCount}`);
                  return (
                    <div className="listagem-content-commits">
                      <ListagemCommits
                        key={dbCadastroCommits.id}
                        content={dbCadastroCommits.content}
                        author={dbCadastroCommits.author}
                        commitDestacado={dbCadastroCommits.commitDestacado}
                        commitResposta={dbCadastroCommits.commitResposta}
                      >
                        <button
                          className={`like-button ${
                            dbCadastroCommits.checkLiked ? "liked" : ""
                          } `}
                          type="button"
                          aria-label="Marcar como gostei"
                          onClick={() => likeCommits(dbCadastroCommits.id)}
                        >
                          {dbCadastroCommits.likesCount > 0 && (
                            <span>{dbCadastroCommits.likesCount}</span>
                          )}

                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z"
                              stroke="#737380"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </ListagemCommits>
                    </div>
                  );
                })}
              </div>
            </MDCommits>
          </div>
        </ModalWrapper>
        <Toaster />
      </Layouts>
    </div>
  );
}

export default BasedeConhecimento;
