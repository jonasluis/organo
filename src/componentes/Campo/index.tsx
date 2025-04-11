import './index.css'

interface CampoProps {
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio: boolean
    type?: string
}


export default function Campo({type = 'text', aoAlterado, label, valor, obrigatorio=false, placeholder} :CampoProps) {

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return ( 
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input value={valor} 
                type={type}
                onChange={evento => aoDigitado} 
                required={obrigatorio} 
                placeholder={`${placeholder}...`}
            />
        </div>
    )
}

