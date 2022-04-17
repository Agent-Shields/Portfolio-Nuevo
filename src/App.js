import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='container-fluid'>
      <header>
        <Header />
      </header>
      <main>
        <Project />
      </main>
      <footer>
      <Footer />
      </footer>
    </div>
  );
}

export default App;
