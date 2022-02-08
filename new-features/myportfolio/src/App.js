
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CardProject from './Components/CardProject';
import { useState } from 'react';

function App() {

  const projects = ['gsoc', 'lbf', 'rahan', 'ucla', 'search-page', 'cookbook']
  const [currentProject, SetCurrentProject] = useState('')

  const handleClick = (name) => {
    SetCurrentProject(name)
  }
  return (
    <div className="App">
      <Header />
      <main>
        <div className="right">
          {projects.map(project =>
            <CardProject name={project} currentProject={currentProject} handleClick={handleClick} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
