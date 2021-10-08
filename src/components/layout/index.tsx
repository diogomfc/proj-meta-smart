import Header from "../Header";
import { Container } from "./styles";

type Itype = {
  color: string;
  children: any;
};

export default function Layout(props: Itype) {
  return (
    <>
      <Header />
      <Container color={props.color}>{props.children}</Container>
    </>
  );
}
