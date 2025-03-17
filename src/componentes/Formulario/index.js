import { useState } from 'react'
import Botao from "../Botao/index.js";
import CampoTexto from "../CampoTexto/index.js";
import ListaSuspensa from "../ListaSuspensa/index.js";
import "./index.css";

export default function Formulario(props) {


   const [nome, setNome] = useState('')
   const [cargo, setCargo] = useState('')
   const [imagem, setImagem] = useState('')
   const [time, setTime] = useState('')
    

   const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })

    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
   }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do Funcionario.</h2>
        <CampoTexto
          obrigatorio={true} 
          label="Nome" 
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
         />
        <CampoTexto 
          obrigatorio={true} 
          label="Cargo" 
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
          />
        <CampoTexto 
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
          />
        <ListaSuspensa 
          obrigatorio={true} 
          label="Times" 
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
          />
        <Botao>
          Criar Card
        </Botao>  
      </form>
    </section>
  );
}
