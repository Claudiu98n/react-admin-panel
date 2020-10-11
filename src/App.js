import React from 'react';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Page404 from './pages/Page404/Page404';
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {

  render() {
    return(
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="*" component={Page404} /> 
        </Switch>
       </div>
       );
  }
}
       

export default App;

