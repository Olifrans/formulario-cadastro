import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function DadosDeEntrega({ aoEviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        id="cep"
        label="Cep"
        type="number"
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        id="endereco"
        label="Endereco"
        type="text"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
        id="numero"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastrar
      </Button>
    </form>
  );
}

export default DadosDeEntrega;
