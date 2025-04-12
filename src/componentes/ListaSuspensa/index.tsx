import './index.css'

interface ListaSupensaProps {
    aoAlterado: ( valor: string) => void
    label: string
    valor: string
    itens: string[]
    obrigatorio?: boolean;
}


export default function ListaSuspensa (props : ListaSupensaProps) {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} 
            required={props.obrigatorio} 
            value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}