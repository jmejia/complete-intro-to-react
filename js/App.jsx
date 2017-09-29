import React from 'react';
import { BrowserRouter, Route, Switch, Match } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={props => <Search shows={preload.shows} {...props} />} />
        <Route
          path="/details/:id"
          component={(props: {match: Match}) => {
            const selectedShow = preload.shows.find(show => show.imdbID === props.match.params.id);
            return <Details show={selectedShow}  {...props} />
          }}
        />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
