import './Campo.css'

export const Campo = ({ type = 'text', label, placeholder, valor, obrigatorio = 'false', aoAlterado }) => { // Está como props mas poderia ser um objeto com os próprios nomes da props
    
    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
            type={type} 
            value={valor} 
            onChange={evento => aoAlterado(evento.target.value)} 
            required={obrigatorio} 
            placeholder={placeholder}
        /> 
        </div>
    )

}