import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import { IColaborador } from "./compartilhado/interfaces/IColaborador";
import { ITime } from "./compartilhado/interfaces/ITime";
import Rodape from "./componentes/Rodape";

function App() {
  const [formVisivel, setFormVisivel] = useState(true);

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Back-end",
      cor: "#D9F7E9",
    },
    {
      id: uuidv4(),
      nome: "Front-end",
      cor: "#E8F8FF",
    },
    {
      id: uuidv4(),
      nome: "Full-Stack",
      cor: "#F0F8E2",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#FDE7E8",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#FAE9F5",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#FFF5D9",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFEEDF",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#d7c1ec",
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: "Jonas Luis",
      cargo: "Desenvolvedor de software e instrutor",
      imagem:
        "https://github.com/jonasluis.png",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Jonas Luis",
      cargo: "Engenheiro de Software",
      imagem:
        "https://github.com/jonasluis.png",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Jonas Luis",
      cargo: "Desenvolvedor Java e React",
      imagem:
        "	https://github.com/jonasluis.png",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      nome: "Jonas Luis",
      cargo: "Hipster e CEO da Jonas__dev",
      imagem:
        "https://github.com/jonasluis.png",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Jonas Luis",
      cargo: "Desenvolvedor de software e instrutor",
      imagem:
        "https://github.com/jonasluis.png",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      nome: "Jonas Luis",
      cargo: "Engenheiro de Software",
      imagem:
        "https://github.com/jonasluis.png",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Jonas Luis",
      cargo: "Desenvolvedor Java e React",
      imagem:
        "	https://github.com/jonasluis.png",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Jonas Luis",
      cargo: "Hipster e CEO da Jonas__dev",
      imagem:
        "https://github.com/jonasluis.png",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Jonas Luis",
      cargo: "Desenvolvedor de software e instrutor",
      imagem:
        "https://github.com/jonasluis.png",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Jonas Luis",
      cargo: "Engenheiro de Software",
      imagem:
        "https://github.com/jonasluis.png",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Jonas Luis",
      cargo: "Desenvolvedor Java e React",
      imagem:
        "	https://github.com/jonasluis.png",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Jonas Luis",
      cargo: "Hipster e CEO da Jonas__dev",
      imagem:
        "https://github.com/jonasluis.png",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      nome: "Jonas Luis",
      cargo: "Desenvolvedor de software e instrutor",
      imagem:
        "https://github.com/jonasluis.png",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Jonas Luis",
      cargo: "Engenheiro de Software",
      imagem:
        "https://github.com/jonasluis.png",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Jonas Luis",
      cargo: "Desenvolvedor Java e React",
      imagem:
        "	https://github.com/jonasluis.png",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      nome: "Jonas Luis",
      cargo: "Hipster e CEO da Jonas__dev",
      imagem:
        "https://github.com/jonasluis.png",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Jonas Luis",
      cargo: "Desenvolvedor de software e instrutor",
      imagem:
        "https://github.com/jonasluis.png",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      nome: "Jonas Luis",
      cargo: "Engenheiro de Software",
      imagem:
        "https://github.com/jonasluis.png",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Jonas Luis",
      cargo: "Desenvolvedor Java e React",
      imagem:
        "	https://github.com/jonasluis.png",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      nome: "Jonas Luis",
      cargo: "Hipster e CEO da Jonas__dev",
      imagem:
        "https://github.com/jonasluis.png",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Jonas Luis",
      cargo: "Desenvolvedor de software e instrutor",
      imagem:
        "https://github.com/jonasluis.png",
      time: times[5].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Jonas Luis",
      cargo: "Engenheiro de Software",
      imagem:
        "https://github.com/jonasluis.png",
      time: times[5].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Jonas Luis",
      cargo: "Desenvolvedor Java e React",
      imagem:
        "	https://github.com/jonasluis.png",
      time: times[5].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Jonas Luis",
      cargo: "Hipster e CEO da Jonas__dev",
      imagem:
        "https://github.com/jonasluis.png",
      time: times[5].nome,
    },
  ];

  const [colaboradores, setColaboradores] = useState<IColaborador[]>(inicial);

  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  function aoDeletarColaborador(id: string) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function mudarCorDoTime(cor: string, id: string) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function cadastrarTime(novoTime: ITime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  function resolverFavorito(id: string) {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) {
          colaborador.favorito = !colaborador.favorito;
        }
        return colaborador;
      })
    );
  }

  const toggleFormulario = () => {
    setFormVisivel(!formVisivel); // Alterna a visibilidade do formulário
  };

  return (
    <div className="App">
      <Banner 
      enderecoImagem="/assets/banner.png"
      textoAlternativo="Banner Principal da página do Organo"
      />

      {formVisivel ? (
        <Formulario
          aoCriarTime={cadastrarTime}
          times={times.map((time) => time.nome)}
          aoColaboradorCadastrado={(colaborador) =>
            aoNovoColaboradorAdicionado(colaborador)
          }
        />
      ) : (
        ''
      )}
      <section className="times">
        <div className="org">
          <h1>Minha Organização</h1>
          <img
            onClick={toggleFormulario}
            src="/assets/botao-esconder-form.png"
            alt="botao para esconder formulario"
          />
        </div>

        {times.map((time) => (
          <Time
            aoFavoritar={resolverFavorito}
            mudarCor={mudarCorDoTime}
            key={time.nome}
            time={time}
            colaboradores={(colaboradores || []).filter(
              (colaborador) => colaborador.time === time.nome
            )}
            aoDeletar={aoDeletarColaborador}
          />
        ))}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
