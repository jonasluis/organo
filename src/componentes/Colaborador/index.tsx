import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import './index.css'
import { IColaborador } from "../../compartilhado/interfaces/IColaborador";
import type { IconBaseProps } from "react-icons";

interface ColaboradorProps {
    colaborador: IColaborador;
    corDeFundo: string;
    aoDeletar: (id: string) => void;
    aoFavoritar: (id: string) => void;
    data: string
}

const CloseIcon = AiFillCloseCircle as React.FC<IconBaseProps>;
const HeartFilled = AiFillHeart as React.FC<IconBaseProps>;
const HeartOutline = AiOutlineHeart as React.FC<IconBaseProps>;


export default function Colaborador( {colaborador, corDeFundo, aoDeletar, aoFavoritar}: ColaboradorProps){

    function favoritar() {
        if (colaborador.id) {
          aoFavoritar(colaborador.id)
        }
      }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='colaborador' >
            <CloseIcon 
                size={25} 
                className='deletar' 
                onClick={() => aoDeletar(colaborador.id) }
            />
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={colaborador.imagem} alt={colaborador.nome}/>
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className="favoritar">
                    {colaborador.favorito 
                        ? <HeartFilled {...propsFavorito} color="ff0000"/> 
                        : <HeartOutline {...propsFavorito}/>
                    }
                </div>
            </div>
        </div>
    )
}