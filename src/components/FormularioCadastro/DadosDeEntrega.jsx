import { Button, TextField } from "@material-ui/core";
import React from "react";

function DadosDeEntrega() {
  return (
    <form>
      <TextField
        id="cep"
        label="Cep"
        type="number"
        variant="outlined"
        margin="normal"
      />

      <TextField
        id="endereco"
        label="Endereco"
        type="text"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        id="numero"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
      />

      <TextField
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
      />

      <TextField
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastrar
      </Button>
    </form>
  );
}

export default DadosDeEntrega;
