import { useState } from 'react'
import { Botao } from '../Botao/Botao'
import CampoTexto from '../CampoTexto'
import { ListaSuspensa } from '../ListaSuspensa/ListaSuspensa'
import './Formulario.css'

export const Formulario = ({ aoColaboradorCadastrado, times }) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

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
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome} // Valor do campo de texto
                    aoAlterado={valor => setNome(valor)} // Função para atualizar o estado quando o valor mudar
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
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
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;