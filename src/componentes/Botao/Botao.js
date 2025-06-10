import './Botao.css'

export const Botao = (props) => {
    return (
        <div>
            <button className='botao'>{props.children}</button>
        </div>
    )
}