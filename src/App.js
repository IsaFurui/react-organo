import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Time from './componentes/Time';
import { Rodape } from './componentes/Rodape/Rodape';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoColaboradorCadastrado = (colaborador) => {
      console.log(colaborador);
      setColaboradores([...colaboradores, colaborador]);
  }

  const times = [{ // Array de objetos representando os times
    nome: 'Programação',
    corPrimaria: '#57C278',
    corSecundaria: '#D9F7E9'
  },
  {
    nome: 'Front-end',
    corPrimaria: '#E8F8FF',
    corSecundaria: '#B2CFFA'
  },
  {
    nome: 'Data Science',
    corPrimaria: '#F0F8E2',
    corSecundaria: '#A6D157'
  },
  {
    nome: 'Dev-Ops',
    corPrimaria: '#FDE7E8',
    corSecundaria: '#E06869'
  },
  {
    nome: 'UX e Design',
    corPrimaria: '#FAE9F5',
    corSecundaria: '#D86EBF'
  },
  {
    nome: 'Mobile',
    corPrimaria: '#FFF5D9',
    corSecundaria: '#FFBA05'
  },
  {
    nome: 'Inovação e Gestão',
    corPrimaria: '#FFEEDF',
    corSecundaria: '#FF8A29'
  }];
  
  return (
    // Cada vez que um colaborador for cadastrado, o estado de colaboradores será atualizado com o novo colaborador.
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoColaboradorCadastrado(colaborador)}/>
      {times.map((time) => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        // Filter - Filtra os colaboradores para cada time
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} // Filtra os colaboradores onde o time é igual ao nome do time atual
      />)}
      <Rodape />
    </div>
  );
}

export default App;