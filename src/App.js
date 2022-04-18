import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  // const [contactSelected, setContactSelected] = useState(false)

  return (
    <Router>
      <div className='container-fluid min-vh-100'>
        <Header />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <About />
            </Route>
            <Route exact path='/contact'>
              <Contact />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
