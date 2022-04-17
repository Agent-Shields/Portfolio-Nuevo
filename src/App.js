import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='container-fluid min-vh-100'>
      <Header />
      <main>
        <Project />
      </main>
      <Footer />
    </div>
  );
}

export default App;
