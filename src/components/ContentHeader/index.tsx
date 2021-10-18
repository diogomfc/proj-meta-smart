import React from "react";
import { Container, TitleContainer } from "./styles";

interface IContainerHeaderProps {
  title: string;
  subTitle: string;
  lineColor: string;
}

export default function ContentHeader(props: IContainerHeaderProps) {
  return (
    <Container>
      <TitleContainer lineColor={props.lineColor}>
        <h1>{props.title}</h1>
        <div></div>
        <h3>{props.subTitle}</h3>
      </TitleContainer>
    </Container>
  );
}
