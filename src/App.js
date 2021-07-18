import './App.css';
import { BrowserRouter,Switch, Route, NavLink } from 'react-router-dom';
import Accueil from './views/Accueil';
import Recherche from './views/Recherche';
import Favoris from './views/Favoris';
import Evenement from './views/Evenement';
import Listing from './views/Listing';
import NotFound from './views/NotFound';


function App() {
  return (
    <BrowserRouter>
    <Switch>
    <div className="App">

      <Route path="/" exact component={Accueil} />
      <Route path="/recherche" exact component={Recherche} />
      <Route path="/favoris" exact component={Favoris} />
      <Route path="/listing" exact component={Listing} />
      <Route path="/event/:id" exact component={Evenement} />
      <Route path="/notfound" component={NotFound} />

    </div>

    </Switch>
    </BrowserRouter>
  );
}

export default App;
