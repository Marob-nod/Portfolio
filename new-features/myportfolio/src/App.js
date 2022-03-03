import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CardProject from './Components/CardProject';
import React from 'react';
import { useEffect, useState, useContext } from 'react';
import dataProjects from './assets/data/projects'
import { ThemeContext } from './index';

const themes = [
  {
    name: 'darkTheme',
    background: 'linear-gradient(rgb(0,0,0), rgb(42,42,42)) no-repeat;',
  },
  {
    name: 'lbf',
    background: 'linear-gradient(to top, rgb(178 31 31) 0%, rgba(178, 31, 31, 1) 0%, rgba(253, 187, 45, 0.5)) no-repeat',
  },
  {
    name: 'gsoc',
    background: 'red',
  },
  {
    name: 'rahan',
    background: 'green',
  },
  {
    name: 'cookbook',
    background: 'yellow',
  },
  {
    name: 'searchPage',
    background: 'blue',
  },
  {
    name: 'ucla',
    background: 'gold',
  }
];

function App() {

  const themeValue = useContext(ThemeContext)
  const [currentProject, setCurrentProject] = useState('')
  const [themeChanged, setThemeChanged] = useState(false)

  console.log('currentProject : ', currentProject)

  const handleClick = (name) => {
    setCurrentProject(name)
    const themeValue = themes.find(theme => theme.name === name)
    console.log('La valeur du theme est mnt :', themeValue.background)
    document.body.style.background = themeValue.background
    setThemeChanged(!themeChanged)
  }

  function useOutsideProject(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          console.log('You clcked outside !')
          setCurrentProject('')
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
