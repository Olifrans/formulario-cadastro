


function validaCPF(cpf) {
    if (cpf.length !== 11) {
      return {
        valido: false,
        texto: "O CPF deve ser composto de 11 digitos númericos.",
      };
    } else {
      return { valido: true, texto: "" };
    }
  }


function validaSenha(cpf) {
    if (cpf.length !== 11) {
      return {
        valido: false,
        texto: "O CPF deve ser composto de 11 digitos númericos.",
      };
    } else {
      return { valido: true, texto: "" };
    }
  }