import './CampoTexto.css'

export const CampoTexto = ({ label, valor, aoAlterado, obrigatorio, placeholder }) => { // Está como props mas poderia ser um objeto com os próprios nomes da props

    const aoDigitado = (evento) => { // Vai ser um objeto que vai representar um evento, nesse caso o onChange
        aoAlterado(evento.target.value); // Evento.target.value é o valor do input
    }
    
    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input valor={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholder}/>
        </div>
    )

}