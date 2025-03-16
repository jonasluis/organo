import { useState } from 'react';
import Banner from './componentes/Banner/index.js';
import Formulario from './componentes/Formulario/index.js';
import Time from './componentes/Time/index.js';

function App() {

  const times = [
    {
      nome: 'Back-end',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Full-Stack',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Devops',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDFh'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#9d57c2',
      corSecundaria: '#d7c1ec'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado =( colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
    }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
    </div>
  );
}

export default App;
