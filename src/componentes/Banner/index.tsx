import './index.css'

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string
}

export default function Banner ({enderecoImagem, textoAlternativo} :BannerProps){
    return (
        <header className='banner'> 
           {/*<img src="/assets/banner.png" alt="Banner Principal da página do Organo"/>*/}
            <img src={enderecoImagem} alt={textoAlternativo}/>
        </header>
    );

}
