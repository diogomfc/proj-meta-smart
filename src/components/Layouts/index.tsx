import Header from "../Header";
import CHeader from "../CHeader";

import { Container, ContentContainer } from "./styles";

function Layouts({ children }) {
  return (
    <>
      <CHeader />
      <Container>
        <ContentContainer>{children}</ContentContainer>
      </Container>
    </>
  );
}

export default Layouts;
