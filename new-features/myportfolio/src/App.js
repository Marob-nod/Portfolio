
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CardProject from './Components/CardProject';
import { useState } from 'react';

function App() {

  const [modals, setModals] = useState([
    {
      id: 'gsoc',
      isClicked: false,
    },
    {
      id: 'lbf',
      isClicked: false,
    },
    {
      id: 'rahan',
      isClicked: false,
    },
    {
      id: 'ucla',
      isClicked: false,
    },
    {
      id: 'search-page',
      isClicked: false,
    },
    {
      id: 'cookbook',
      isClicked: false,
    }
  ])

  console.log('Je suis dans APP')
  const handleClick = (id) => {
    console.log('Début du handleclick')
    //console.log('event : ', event)
    console.log('id : ', id)
    //setModals(modals.map(modal => modal.isClicked = false))
    const elementClicked = modals.find(modal => modal.id == id)
    console.log(elementClicked)
    setModals(elementClicked.isClicked = true)
    console.log('click de la modal id : ', id, ' et sa valeur bool : ', elementClicked.isClicked)
  }
  return (
    <div className="App">
      <Header />
      <main>
        <div className="right">

          {modals.map(modal =>
            <CardProject name={modal.id} id={modal.id} isClicked={modal.isClicked} handleClick={handleClick} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
