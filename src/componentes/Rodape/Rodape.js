import './Rodape.css';

export const Rodape = () => {
    return (
        <footer className="rodapee">
            <div className='redes-sociais'>
                <img src="/imagens/fb.png" alt="Facebook" className='facebook' />
                <img src="/imagens/tw.png" alt="Twitter" className='twitter'/>
                <img src="/imagens/ig.png" alt="Instagram" className='instagram'/>
            </div>
            <img src="/imagens/logo.png" alt="Organo" />
            <p className='texto'>Desenvolvido por Isabelle Furui</p>
        </footer>
    )   
}