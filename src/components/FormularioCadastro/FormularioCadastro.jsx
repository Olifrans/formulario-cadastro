import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosDeEntrega from "./DadosDeEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEviar, validaCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEviar(dadosColetados);
    }
  });

  const formularios = [
    <DadosUsuario aoEviar={coletaDados} />,
    <DadosPessoais aoEviar={coletaDados} validaCPF={validaCPF} />,
    <DadosDeEntrega aoEviar={coletaDados} />,
    <Typography variant="h5">Obrigado por se cadastrar</Typography>,
  ];

  function coletaDados(dados) {
    setDadosColetados({ ...dadosColetados, ...dados });
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Dados Pessoais</StepLabel>
        </Step>
        <Step>
          <StepLabel>Dados de Endereços</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização de Cadastro</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
