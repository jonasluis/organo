import './index.css'

export default function Rodape(){
    return (<footer className='footer'>
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src='/assets/fb.png' alt='Logo facebook'/>
                    </a>
                </li>
                <li>
                <a href="twitter.com" target="_blank">
                    <img src="/assets/tw.png" alt="" />
                </a>
            </li>
            <li>
                <a href="instagram.com" target="_blank">
                    <img src="/assets/ig.png" alt="" />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src="/assets/logo.png" alt="" />
       </section>
       <section>
        <p>
            Desenvolvido por Jonas.
        </p>
        </section>
    </footer>

    )
}