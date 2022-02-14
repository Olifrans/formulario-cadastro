import React, { useState, useContext } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastros from "../../contexts/ValidacoesCadastros";

//Formulario controlados
function DadosPessoais({ aoEviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [cursos, setCursos] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" }, nome: { valido: true, texto: "" } });



  const validacoes = useContext(ValidacoesCadastros);

  function validaCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEviar(event) {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEviar()) {
          aoEviar({ nome, sobrenome, cpf, cursos, novidades });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
          // let tempoNome = event.target.value;
          // if (tempoNome.length >= 7) {
          //   tempoNome = tempoNome.substring(0,4);
          // }
          // setNome(tempoNome);
        }}

        onBlur={validaCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}



        id="nome"
        name="nome"
        variant="outlined"
        label="Nome"
        fullWidth
        margin="normal"
        required
      />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        name="sobrenome"
        variant="outlined"
        label="Sobrenome"
        fullWidth
        margin="normal"
      />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        id="cpf"
        name="cpf"
        variant="outlined"
        label="CPF"
        fullWidth
        margin="normal"
        required
        onBlur={validaCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
      />

      <FormControlLabel
        label="Cursos"
        control={
          <Switch
            checked={cursos}
            onChange={(event) => {
              setCursos(event.target.checked);
            }}
            name="cursos"
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
