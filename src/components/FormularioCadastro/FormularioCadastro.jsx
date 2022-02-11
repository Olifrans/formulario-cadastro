import { Typography } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import DadosDeEntrega from "./DadosDeEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

//Formulario controlados
function FormularioCadastro({ aoEviar, validaCPF }) {

  const [etapaAtual, setEtapaAtual] = useState(0);

  function proximo(){
    setEtapaAtual(etapaAtual+1)
  }

  function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuario aoEviar={proximo} />;

      case 1:
        return <DadosPessoais aoEviar={proximo} validaCPF={validaCPF} />;

      case 2:
        return <DadosDeEntrega aoEviar={aoEviar} />;

      default:
        return <Typography>Error ao selecionar o formulario</Typography>;
    }
  }

  return <>{formularioAtual(etapaAtual)}</>;
}

export default FormularioCadastro;
