import { Switch, Route, useLocation } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import Home from '../pages/home';
import Apod from '../pages/apod';

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
      </Switch>
      <Footer />
    </>
  );
};

export default App;
