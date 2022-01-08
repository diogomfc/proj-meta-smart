import React from "react";
import { Container } from "./styles";

interface IModal {
  icon: string;
  title?: string;
  subTitle?: string;
  children: any;
}

export default function Modal(props: IModal) {
  return (
    <Container>
      <header className="modal-header">
        <img src={props.icon} alt={props.title} />
        <h1>{props.title}</h1>
        <span>{props.subTitle}</span>
      </header>
      <main className="modal-main">{props.children}</main>
    </Container>
  );
}
