import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./css/cssReset.css";
import "./css/index.css";
import Home from './components/home';
import Detail from './components/detail';
import Order from './components/order';
import Cart from './components/cart';
import Person from './components/person';

class Index extends React.Component {
	 render() {
	 	 return (
	 	 	 <Router>
	 	 	 		<Switch>
	 	 	 			<Route path="/home" component={Home}/>
	 	 	 			<Route path="/detail/:dishID" component={Detail}/>
	 	 	 			<Route path="/order/:total" component={Order}/>
	 	 	 			<Route path="/cart" component={Cart}/>
	 	 	 			<Route path="/person" component={Person}/>
	 	 	 			<Route component={Home}/>
	 	 	 		</Switch>
	 	 	 </Router>
	 	 )
	 }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
