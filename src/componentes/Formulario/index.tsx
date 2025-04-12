import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./index.css";
import { IColaborador } from '../../compartilhado/interfaces/IColaborador';
import { ITime } from '../../compartilhado/interfaces/ITime';


interface FormularioProps {
  aoColaboradorCadastrado: (colaborador: IColaborador) => void
  times: string[];
  aoCriarTime: (time: ITime) => void;
} 



export default function Formulario({aoColaboradorCadastrado, times, aoCriarTime}: FormularioProps) {


   const [nome, setNome] = useState('')
   const [cargo, setCargo] = useState('')
   const [imagem, setImagem] = useState('')
   const [time, setTime] = useState('')
   const [nomeTime, setNomeTime] = useState('')
   const [corTime, setCorTime] = useState('')
   const [data, setData] = useState('')
    

   const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    aoColaboradorCadastrado({
      id: uuidv4(),
      nome,
      cargo,
      imagem,
      time,
      data,
      favorito: false
  })
  setNome('')
  setCargo('')
  setImagem('')
  setTime('')
}

  return (
    <section className="formulario">
      <form onSubmit={evento => aoSalvar(evento)}>
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
        <Campo 
          type='date'
          label="Data de Entrada no time"
          placeholder=""
          valor={data}
          aoAlterado={valor => setData(valor)}
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
        aoCriarTime({id: uuidv4(), nome: nomeTime, cor: corTime})
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
