import React, { useState } from "react";

function useErros(validacoes) {
  const estadoInicial = criarEstadoInicial(validacoes);
  const [erros, setErros] = useState(estadoInicial);

  function validaCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }
  return [erros, validaCampos, possoEviar];
}

function criarEstadoInicial(validacoes) {
  const estadoInicial = {};
  for (let campo in validacoes) {
    estadoInicial[campo] = { valido: true, texto: "" };
  }
  return estadoInicial;
}

export default useErros;







// <TextField
//         value={nome}
//         onChange={(event) => {
//           setNome(event.target.value);
//           // let tempoNome = event.target.value;
//           // if (tempoNome.length >= 7) {
//           //   tempoNome = tempoNome.substring(0,4);
//           // }
//           // setNome(tempoNome);
//         }}
//         onBlur={validaCampos}
//         error={!erros.nome.valido}
//         helperText={erros.nome.texto}
//         id="nome"
//         name="nome"
//         variant="outlined"
//         label="Nome"
//         fullWidth
//         margin="normal"
//         required
//       />