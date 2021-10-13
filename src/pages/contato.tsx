import Layouts from "../components/Layouts";

import styled from "styled-components";

const Titulo = styled.div`
  //background: red;
  width: 100%;
  height: 900px;
`;

export default function Contato() {
  return (
    <Layouts>
      <Titulo>
        <h1>CONTATO</h1>
      </Titulo>
    </Layouts>
  );
}
