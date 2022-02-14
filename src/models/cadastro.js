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

function validaSenha(senha) {
  if (senha.length < 4 || senha.length > 72) {
    return {
      valido: false,
      texto: "A senha deve ter entre 04 e 72 digitos.",
    };
  } else {
    return { valido: true, texto: "" };
  }
}

export { validaCPF, validaSenha };
