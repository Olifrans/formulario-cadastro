import { Typography } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import DadosDeEntrega from "./DadosDeEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

//Formulario controlados
function FormularioCadastro({ aoEviar, validaCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const formulario = [
    <DadosUsuario aoEviar={proximo} />,
    <DadosPessoais aoEviar={proximo} validaCPF={validaCPF} />,
    <DadosDeEntrega aoEviar={aoEviar} />,
  ];

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  //return <Typography>Error ao selecionar o formulario</Typography>;

  return <>{formulario[etapaAtual]}</>;
}

export default FormularioCadastro;
