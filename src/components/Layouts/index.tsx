import Header from "../Header";

import { Container, ContentContainer } from "./styles";

function Layouts({ children }) {
  return (
    <>
      <Header />
      <Container>
        <ContentContainer>{children}</ContentContainer>
      </Container>
    </>
  );
}

export default Layouts;
