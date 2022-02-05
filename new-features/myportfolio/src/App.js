import rahan from './assets/rahan.jpg'
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CardProject from './Components/CardProject';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="right">
          <CardProject name="GSoC" id="gsoc" />
          <CardProject name="LBF" id="lbf" />
          <CardProject name="Rahan" id="rahan" />
          <CardProject name="UCLA" id="ucla" />
          <CardProject name="Search-Page" id="search-page" />
          <CardProject name="Cookbook" id="cookbook" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
