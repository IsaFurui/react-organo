import Colaborador from '../Colaborador/Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba'

export const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, 0.6)}}>
            <input onChange={evento => mudarCor(evento.target.value, time.id)} value={time.cor} type='color' className='input-cor'></input>
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) =>  {
                    return (
                        <Colaborador 
                            key={indice} 
                            colaborador={colaborador} 
                            corDeFundo={time.cor}
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />
                    )
                })}
            </div>
        </section>

    )
}