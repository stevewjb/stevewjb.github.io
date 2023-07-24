import Navbar from './Navbar';
import Home from './Home';
import Category from './Category';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Services from './Services';
import Checkout from './Checkout';
import ServicesCh from './Services-ch';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/category">
              <Category />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/servicesch">
              <ServicesCh />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
