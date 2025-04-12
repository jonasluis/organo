import hexToRgba from 'hex-to-rgba';

import './index.css'
import { IColaborador } from '../../compartilhado/interfaces/IColaborador';
import { ITime } from '../../compartilhado/interfaces/ITime';
import Colaborador from '../Colaborador';

interface TimeProps {
    time: ITime
    colaboradores: IColaborador[]
    aoDeletar: (id: string) => void;
    mudarCor: (cor: string, id: string) => void;
    aoFavoritar: (id: string) => void;
}


export default function Time({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }: TimeProps) {
    const css = { backgroundColor: hexToRgba(time.cor, '0.6') };

    return (
        colaboradores.length > 0 ? (
            <section className='time' style={css}>
                <input 
                    onChange={evento => mudarCor(evento.target.value, time.id)} 
                    value={time.cor} 
                    type='color' 
                    className='input-cor'
                />
                <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
                <div className='colaboradores'>
                    {colaboradores.map((colaborador, indice) => {
                        return (
                            <Colaborador 
                                corDeFundo={time.cor} 
                                key={indice} 
                                colaborador={colaborador} 
                                aoDeletar={aoDeletar} 
                                aoFavoritar={aoFavoritar}
                            />
                        )
                    })}
                </div>
            </section>
        ) : <></>
    );
}
