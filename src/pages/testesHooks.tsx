import React from "react";
import { useBase } from "../hooks/useBase";

function testesHooks() {
  const chaveId = "-MoUAOXBXPLuKbVoE-ar";
  const { dbCadastroCommits, dbCadastroLinks } = useBase();
  return <div>{JSON.stringify(dbCadastroLinks)}</div>;
}

export default testesHooks;
