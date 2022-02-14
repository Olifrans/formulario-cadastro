import { Component } from "react/cjs/react.production.min";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography, Avatar } from "@material-ui/core";
import "@fontsource/roboto";
import { CropFreeSharp } from "@mui/icons-material";

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

        <FormularioCadastro aoEviar={aoEviarFormulario} validaCPF={validaCPF} />
      </Container>
    );
  }
}

function aoEviarFormulario(dados) {
  console.log(dados);
}

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

export default App;
