import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [contactSelected, setContactSelected] = useState(false)

  return (
    <div className='container-fluid min-vh-100'>
      <Header>
      </Header>
      <main>
        contactSelected={contactSelected},
        setContactSelected={setContactSelected}
        <Project />
      </main>
      <Footer />
    </div>
  );
}

export default App;
