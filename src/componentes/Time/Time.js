import Colaborador from '../Colaborador/Colaborador';
import './Time.css';

export const Time = (props) => {
    if (props.colaboradores.length > 0) {
        return (
           (props.colaboradores.length > 0) ?
           <section className="time" style={{ backgroundColor: props.corPrimaria }}>
               <h3 style={{ borderColor: props.corSecundaria }}>{props.nome}</h3>
               <div className='colaboradores'>
                   {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} cor={props.corSecundaria}/>)}            
               </div>
           </section> : ''
        )
    } else {
        return '';
    }
}