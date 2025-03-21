import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './componentes/Banner/index.js';
import Formulario from './componentes/Formulario/index.js';
import Time from './componentes/Time/index.js';
import Rodape from './componentes/Rodape/index.js';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Back-end',
      cor: '#D9F7E9'
    },
    {
      id: uuidv4(),
      nome: 'Front-end',
      cor: '#E8F8FF'
    },
    {
      id: uuidv4(),
      nome: 'Full-Stack',
      cor: '#F0F8E2'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#FAE9F5'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#FFF5D9'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFEEDF'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#d7c1ec'
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado =( colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
    }

  function aoDeletarColaborador(){

  }

  function mudarCorDoTime(cor, id){
    setTimes(times.map(time => {
      if(time.id === id){
        time.cor = cor;
        return { ...time, cor: cor };
      }
      return time
    }))
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
        <section className='times'>
          <h1>Minha organização</h1>
      {times.map(time => 
        <Time 
          mudarCor={mudarCorDoTime}
          key={time.nome} 
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar ={aoDeletarColaborador}
        />)
      }
        </section>
      <Rodape/>
    </div>
  );
}

export default App;
