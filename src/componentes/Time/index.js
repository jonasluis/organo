import './index.css'

export default function Time(props){
    const css = {backgroundColor: props.corSecundaria}
    return (


        <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        </section>
    )

}