import { Button, TextField } from "@material-ui/core";
import React from "react";

function DadosUsuario() {
  return (
    <form>
      <TextField
        id="email"
        label="email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        variant="outlined"
        fullWidth
        margin="normal"
        required
        id="senha"
        label="senha"
        type="password"
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
