import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import Resume from './components/Resume';

function App() {

  // const [contactSelected, setContactSelected] = useState(false)

  return (
    <Router basename={process.env.PUBLIC_URL || 'localhost/'}>
      <div className='container-fluid min-vh-100'>
        <Header />
        <div className='content'>
          <Switch>
            <Route component={ About } exact path='/'>
              <About />
            </Route>
            <Route component={ Contact } exact path='/contact'>
              <Contact />
            </Route>
            <Route component={ Resume } exact path='/resume'>
              <Resume />
            </Route>
            <Route path='*'>
              <About />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
