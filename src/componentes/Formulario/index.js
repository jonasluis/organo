import CampoTexto from "../CampoTexto/index.js";
import ListaSuspensa from "../ListaSuspensa/index.js";
import "./index.css";

export default function Formulario() {

  const times = [
    'Back-end',
     'Front-end',
     'Data Science',
      'Devops',
      'UX e Design',
      'Mobile',
      "Inovação e Gestão"

   ]

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do Funcionario.</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
        <ListaSuspensa label="Times" itens={times}/>
      </form>
    </section>
  );
}
