import React from "react";
import { ContainerInput } from "./styles";

interface IInputs {
  widthInput: number | string;
  heightInput: number | string;
  backgroundInput: string;
  colorInput: string;
  placeholderInput: string;
  //valueInput: string | string;
  typeInput: string;
  nomeInput: string;
  // idInput: string;
  //onChangeInput(): void;
  paddingInput: number | string;
  borderRadiusInput: number | string;
}

export default function Inputs(props: IInputs) {
  return (
    <ContainerInput
      background={props.backgroundInput}
      color={props.colorInput}
      height={props.heightInput}
      width={props.widthInput}
      padding={props.paddingInput}
      borderRadius={props.borderRadiusInput}
    >
      <input
        type={props.typeInput}
        name={props.nomeInput}
        placeholder={props.placeholderInput}
        //value={props.valueInput}
        //onChange={props.onChangeInput}
      />
    </ContainerInput>
  );
}
