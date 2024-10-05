import './App.css';
import Kartyak from './components/Kartyak.js';
import { lista } from './adatlista';

function App() {
  
  return (
    // egy gyökér elem lehet csak a return ágban
    // páratlan tagaket is le kell zárni <img/>, lsd img
    // map, forEach-hez hasonló, de eredménye van, visszatér egy értékkel (komponens elemmel) minden körben lefutás alatt
    <div className="App">
      <header className="App-header">
        Első app
       
      </header>
      <article>
       
     <Kartyak lista = {lista}/>
     
      </article>
      <footer>Massányi Csilla</footer>
    </div>
  );
}

export default App;
