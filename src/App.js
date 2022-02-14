import { Component } from "react/cjs/react.production.min";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

import ValidacoesCadastros from "./contexts/ValidacoesCadastros";

import { Container, Typography, Avatar } from "@material-ui/core";
import "@fontsource/roboto";
import { CropFreeSharp } from "@mui/icons-material";
import { validaCPF, validaSenha } from "./models/cadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="md">
        <Avatar
          alt="Remy Sharp"
          src="../public/assets/logo-iti.png"
          variant="circular"
        />

        <Typography variant="h3" component="h1" align="center">
          ITI - Instituto Tecnológico Inovação
        </Typography>

        <Typography variant="h4" component="h2" align="center">
          Treinamentos e Inovação Tecnológica
        </Typography>

        <ValidacoesCadastros.Provider
          value={{ cpf: validaCPF, senha: validaSenha, nome: validaSenha }}
        >
          <FormularioCadastro aoEviar={aoEviarFormulario} />
        </ValidacoesCadastros.Provider>
      </Container>
    );
  }
}

function aoEviarFormulario(dados) {
  console.log(dados);
}

export default App;
