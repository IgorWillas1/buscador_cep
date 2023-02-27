import { FiSearch } from 'react-icons/fi'
import './style.app.css';

function App() {
  return (
    <div className="container">      
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">

        <input 
        type="text"
        id="search"
        placeholder="Digite um CEP válido..."
        />

        <button className="buttonSearch">
          <FiSearch size={25} color='#000' />
        </button>

      </div>

      <main className='main'>
        <h2>CEP: 55198409</h2>

        <span>Rua: Maria sei lá</span>
        <span>Complemento: perto da rua</span>
        <span>Bairro: São João</span>
        <span>Cidade: Santa Cruz - PE</span>
      </main>

    </div>
  );
}

export default App;
