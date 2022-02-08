
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CardProject from './Components/CardProject';
import { useState } from 'react';

function App() {

  const projects = [
    { name: 'gsoc', title: 'GOOGLE SUMMER OF CODE ANALYSER', description: 'Contribution to this awesome tool made for analizing technologies used for the GSoC projects', techs: 'ReactJS, CSS', link: 'https://sparsh1212.github.io/gsocanalyzer/' },
    { name: 'lbf', title: 'LETS BE FRIENDS', description: 'A Web App to participate or organize events while learning a new language', techs: 'ReactJS, NodeJS, CSS', link: 'https://letsbefriends.netlify.app/' },
    { name: 'rahan', title: 'RAHAN', description: '', link: '', techs: '' },
    { name: 'ucla', title: 'CONTRIBUTION TO UNIVERSITY OF LOS ANGELES WEBSITE', description: '', link: '', techs: '' },
    { name: 'search-page', title: 'LBF - GEOLOCALISTAION AND MULTIPLE FIELDS RESEARCH', description: '', link: '', techs: '' },
    { name: 'cookbook', title: 'COOKBOOK', description: '', link: '', techs: '' }
  ]
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
            <CardProject {...project} currentProject={currentProject} handleClick={handleClick} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
