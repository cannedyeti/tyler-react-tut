var React = require('react');
var Popular = require('./Popular');
var Test = require('./Test');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle')
var Results = require('./Results');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          Hello React Training!
          <Nav />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path="/popular" component={Popular} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/battle/results" component={Results} />
            <Route path='/test' component={Test} />
            <Route render={function() {
              return <p>404 Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;