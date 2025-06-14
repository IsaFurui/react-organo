import { useState } from 'react'
import { Botao } from '../Botao/Botao'
import Campo from '../Campo'
import { ListaSuspensa } from '../ListaSuspensa/ListaSuspensa'
import './Formulario.css'

export const Formulario = ({ aoColaboradorCadastrado, times, cadastrarTime }) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault(); // Previne o comportamento padrão do formulário de recarregar a página
        aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        }); // Chama a função aoColaboradorCadastrado com os dados do colaborador
        setNome(''); // Limpa o campo de nome
        setCargo(''); // Limpa o campo de cargo
        setImagem(''); // Limpa o campo de imagem
        setTime(''); // Limpa o campo de time
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome} // Valor do campo de texto
                    aoAlterado={valor => setNome(valor)} // Função para atualizar o estado quando o valor mudar
                />
                <Campo 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Campo 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço da sua imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    label="Time" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    obrigatorio={true}>
                </ListaSuspensa>
                <Botao texto="Criar Card"></Botao>
            </form>

            <form className="formulario" onSubmit={(evento) => {
                evento.preventDefault(); // para não acontecer o refresh na página, ao trabalhar com onSubmit esse refresh é padrão
                cadastrarTime({nome: nomeTime, cor: corTime}); // cadastrando o time passando um objeto de nome e time
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Campo
                    obrigatorio
                    label='Time'
                    placeholder='Digite o nome do time'
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}/>
                <Campo
                    obrigatorio={true}
                    type='color'
                    label='Cor' 
                    placeholder='Digite a cor do time'
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}/>
                <Botao texto='Criar um novo time' />
            </form>
        </section>
    )
}

export default Formulario;