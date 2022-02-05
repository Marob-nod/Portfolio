import rahan from './assets/rahan.jpg'
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="right">


          <div className="item" id='gsoc'>
            <div className="vert">GSoC</div>
            <div className="horiz">
              <span className='name'>GSoC</span>
              <div className="topics">
                <strong>100</strong>
                <span>TOPICS</span>
              </div>
            </div>
          </div>

          <div className="item" id='lbf'>
            <div className="vert">LBF</div>
            <div className="horiz">
              <span className='name'>LBF</span>
              <div className="topics">
                <strong>100</strong>
                <span>TOPICS</span>
              </div>
            </div>
          </div>

          <div className="item" id='rahan'>
            <div className="vert">Rahan</div>
            <div className="horiz">
              <span className='name'>Rahan</span>
              <div className="topics">
                <strong>100</strong>
                <span>TOPICS</span>
              </div>
            </div>
          </div>

          <div className="item" id='ucla'>
            <div className="vert">UCLA</div>
            <div className="horiz">
              <span className='name'>UCLA</span>
              <div className="topics">
                <strong>100</strong>
                <span>TOPICS</span>
              </div>
            </div>
          </div>

          <div className="item" id='search-page'>
            <div className="vert">Search-Page</div>
            <div className="horiz">
              <span className='name'>Search Page</span>
              <div className="topics">
                <strong>100</strong>
                <span>TOPICS</span>
              </div>
            </div>
          </div>

          <div className="item" id='cookbook'>
            <div className="vert">CookBook</div>
            <div className="horiz">
              <span className='name'>CookBook</span>
              <div className="topics">
                <strong>100</strong>
                <span>TOPICS</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
