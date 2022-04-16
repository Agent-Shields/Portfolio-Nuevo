import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='container'>
      <Header />
      <Navigation />
      <main>
        <Project />
      </main>
      <Footer />
    </div>
  );
}

export default App;
