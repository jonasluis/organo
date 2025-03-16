import Botao from "../Botao/index.js";
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

   const aoSalvar = (evento) => {
    evento.preventDefalt()
    console.log('Form foi submetido')
   }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do Funcionario.</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
        <ListaSuspensa obrigatorio={true} label="Times" itens={times}/>
        <Botao>
          Criar Card
        </Botao>  
      </form>
    </section>
  );
}
