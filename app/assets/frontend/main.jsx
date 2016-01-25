import React from "react";
import { render } from 'react-dom';
import Index from "./components/Index"
import Follow from './components/Follow'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

// this.props.children property is what React router uses to insert
// the component that should be rendered base on the certain URL
class App extends React.Component {
  render(){
    return (
      <div>
        <h1>App</h1>
        {/* change the <a>s to <Link>s */}
        <ul>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/follow">Follow</Link></li>
        </ul>

        {/*
         next we replace `<Child>` with `this.props.children`
         the router will figure out the children for us
         */}
        { this.props.children }
      </div>
    )
  }
}

let documentReady = () => {
  let reactNode = document.getElementById("react");
  if (reactNode){
    render((
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Index} />
            <Route path="follow" component={Follow} />
          </Route>
        </Router>
    ), reactNode);
  }
};

$(documentReady);