import React, { useEffect, useState } from 'react'
import { database, dbFirestore } from "../services/dbMestasmasrt";
import { useAuth } from './useAuth';

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
  };

  type IFbCommits = Record<
  string,
  {
    content: string;
    author: {
      name: string;
      avatar: string;
    };
    commitDestacado: boolean;
    commitResposta: boolean;
  }
>;

export function useBase() {

  //useState para Guardar um array dos cadastros de Links e commits
  const [dbCadastroLinks, setDbCadastroLinks] = useState<ICadastroLinks[]>([]);
  const [dbCadastroCommits, setDbCadastroCommits] = useState<IFbCommitsLinks[]>(
    []
  );

  useEffect(() => {
    const dblinkRef = database.ref(`dblinks/`);

    dblinkRef.on("value", (dblink) => {
      const databaseLinks = dblink.val();

      const fbCommits: IFbCommits = databaseLinks.commits ?? {};
      const resultCadastroCommits = Object.entries(fbCommits).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          commitDestacado: value.commitDestacado,
          commitResposta: value.commitResposta,
        };
      });

      setDbCadastroCommits(resultCadastroCommits);

    });
  }, []);

  useEffect(() => {
    const dblinkRef = database.ref("dblinks");

    dblinkRef.on("value", (dblink) => {
      const databaseLinks = dblink.val();

      const fbLink = databaseLinks ?? {};
      const resultCadastroLinks = Object.entries<ICadastroLinks>(fbLink).map(([chave, dbLink]) => {
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
        };
      })
        
      setDbCadastroLinks(resultCadastroLinks);

    });
  }, []);

  return{ dbCadastroCommits, dbCadastroLinks}

}
