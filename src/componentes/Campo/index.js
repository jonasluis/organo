import './index.css'

export default function Campo({type = 'text', aoAlterado, label, valor, obrigatorio=false, placeholder}) {

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return ( 
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input value={valor} 
                type={type}
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={`${placeholder}...`}
            />
        </div>
    )
}

