import React,{ useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import Products from './components/pages/Products';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';
import Drips from './components/product-pages/Drips';
import Pipes from './components/product-pages/Pipes';

const store = configureStore();

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
    <div className="App">
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/products" component={Products} />
            <Route path="/drips" component={Drips} />
            <Route path="/pipes" component={Pipes} />
          </Switch>
          <Footer />
        </Router>
    </div>
    </Provider>
  );
}

export default App;
