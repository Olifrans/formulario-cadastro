import React, { Fragment, useState } from "react";
import DadosDeEntrega from "./DadosDeEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";




//Formulario controlados
function FormularioCadastro({ aoEviar, validaCPF }) {

  return (
    <>
     <DadosPessoais aoEviar={aoEviar} validaCPF={validaCPF} />
     <DadosUsuario />
     <DadosDeEntrega />

      
    </>
   
  );
}

export default FormularioCadastro;
