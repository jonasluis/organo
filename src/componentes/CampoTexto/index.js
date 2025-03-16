import './index.css'

export default function CampoTexto(props) {

    return ( 
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={`${props.placeholder}...`}/>
        </div>
    )
}

