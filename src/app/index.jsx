import { Switch, Route, useLocation } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import Home from '../pages/home';
import Apod from '../pages/apod';
import Rover from '../pages/rover';
import Weather from '../pages/weather';

const App = props => {
  const location = useLocation();
  return (
    <>
      <Switch location={location}>
        <Route path="/" exact>
          <>
            <Header />
            <Home />
          </>
        </Route>
        <Route path="/apod" exact>
          <Apod />
        </Route>
        <Route path="/rover-photos" exact>
          <Rover />
        </Route>
        <Route path="/mars-weather" exact>
          <Weather />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
