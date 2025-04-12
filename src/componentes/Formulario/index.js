import { useState } from 'react'
import Botao from "../Botao/index.tsx";
import Campo from "../Campo/index.tsx";
import ListaSuspensa from "../ListaSuspensa/index.tsx";
import "./index.css";

export default function Formulario({aoColaboradorCadastrado, times, aoCriarTime}) {


   const [nome, setNome] = useState('')
   const [cargo, setCargo] = useState('')
   const [imagem, setImagem] = useState('')
   const [time, setTime] = useState('')
   const [nomeTime, setNomeTime] = useState('')
   const [corTime, setCorTime] = useState('')
    

   const aoSalvar = (evento) => {
    evento.preventDefault()
    aoColaboradorCadastrado({
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
        <Campo
          obrigatorio={true} 
          label="Nome" 
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
         />
        <Campo 
          obrigatorio={true} 
          label="Cargo" 
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
          />
        <Campo 
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
          />
        <ListaSuspensa 
          obrigatorio={true} 
          label="Times" 
          itens={times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
          />
        <Botao>
          Criar Card
        </Botao>  
      </form>
      <form onSubmit={(evento) => {
        evento.preventDefault()
        aoCriarTime({nome: nomeTime, cor: corTime})
      }}>
        <h2>Preencha os dados para criar um novo time.</h2>
        <Campo
          obrigatorio
          label="Nome" 
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={valor => setNomeTime(valor)}
         />
        <Campo 
          obrigatorio
          type='color'
          label="Cor" 
          placeholder="Digite a cor do time"
          valor={corTime}
          aoAlterado={valor => setCorTime(valor)}
          />
        <Botao>
          Criar um novo time
        </Botao>  
      </form>
    </section>
  );
}
