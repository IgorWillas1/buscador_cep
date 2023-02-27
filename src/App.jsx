import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.app.css';
import api from './services/api.js';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handleSearch = async () => {
    if (input === '' || input === undefined) {
      alert('por favor, digite um CEP!')
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput('');

    }catch (err) {
      alert('Erro ao buscar CEp, por favor digite um CEP válido.')
    }
  }
  

  return (
    <div className="container">      
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">

        <input 
        type="text"
        placeholder="Digite um CEP válido..."
        value={input}
        onChange={handleInput}
        />

        <button className="buttonSearch"
        onClick={handleSearch}
        >
          <FiSearch size={25} color='#000' />
        </button>

      </div>

      {Object.keys(cep).length > 0 && (
        <main className='main'>
        <h2>CEP: {cep.cep}</h2>

        <span>Rua: {cep.logradouro}</span>
        <span>Complemento: {cep.complemento || 'Não existe complemento'}</span>
        <span>Bairro: {cep.bairro}</span>
        <span>Cidade: {cep.localidade + '-' + cep.uf }</span>
      </main>
      )}

    </div>
  );
}

export default App;
