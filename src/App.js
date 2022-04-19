import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio'
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <Router basename={process.env.PUBLIC_URL || '/'}>
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
            <Route exact path='/resume'>
              <Resume />
            </Route>
            <Route exact path='/portfolio'>
              <Portfolio />
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
