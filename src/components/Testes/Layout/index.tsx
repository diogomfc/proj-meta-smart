import ContentHeader from "../../NavbarSmart/ContentHeader";
import { Container } from "./styles";

type Itype = {
  color: string;
  children: any;
};

export default function Layout(props: Itype) {
  return (
    <>
      <ContentHeader />
      <Container color={props.color}>{props.children}</Container>
    </>
  );
}
