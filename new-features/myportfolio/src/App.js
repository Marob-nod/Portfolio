import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CardProject from './Components/CardProject';
import React from 'react';
import { useEffect, useState } from 'react';
import dataProjects from './assets/data/projects'

function App() {

  const [currentProject, SetCurrentProject] = useState('')

  const handleClick = (name) => {
    SetCurrentProject(name)
  }

  function useOutsideProject(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          console.log('You clcked outside !')
          SetCurrentProject('')
        }
      }
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [ref])
  }
  return (

    <div className="App">
      <Header />
      <main>
        <div className="right">
          {dataProjects.map(project =>
            <CardProject {...project} currentProject={currentProject} handleClick={handleClick} handleClickOut={useOutsideProject} />
          )}
        </div>
      </main>
      <Footer />
    </div>

  );
}

export default App;
