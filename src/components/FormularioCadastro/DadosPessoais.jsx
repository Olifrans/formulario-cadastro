import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";



//Formulario controlados
function DadosPessoais({ aoEviar, validaCPF }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [cursos, setCursos] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEviar({ nome, sobrenome, cpf, cursos, novidades });
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
        id="nome"
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
        variant="outlined"
        label="CPF"
        fullWidth
        margin="normal"
        required
        //Erros
        onBlur={(event) => {
          const ehcpfValido = validaCPF(cpf);
          setErros({ cpf: ehcpfValido });
        }}
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
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
