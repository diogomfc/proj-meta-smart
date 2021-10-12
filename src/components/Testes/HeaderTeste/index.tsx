import { ContainerHeader, ContentHeader, Container, Perfil } from "./styles";

export default function Header(props) {
  return (
    <ContainerHeader>
      <img src="/img/Logo.svg" alt="Meta Smart" />

      <ContentHeader>
        <Perfil>
          <img src="/img/ImgAvatar.svg" alt="" />
          <div>
            <h1>
              Diogo Silva <p>moderador</p>
            </h1>
            <span>Consultor financeiro auto I </span>
          </div>
        </Perfil>
      </ContentHeader>
    </ContainerHeader>
  );
}
