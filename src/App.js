import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import Home from './components/Home';
import DropDownPage from './components/DropDownPage';
import ModalPage from './components/ModalPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <div className='App'>
        <SideBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dropdownpage' component={DropDownPage} />
          <Route exact path='/modalpage' component={ModalPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
