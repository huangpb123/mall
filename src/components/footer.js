import React from 'react';
import "../css/footer.css"
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
	render() {
		return (
			<ul className="footer">
				<li>
					<Link to="/home"><img src={require('../images/home.png')} alt=""/></Link>
				</li>
				<li>
					<Link to="/cart"><img src={require('../images/cart.png')} alt=""/></Link>
				</li>
				<li>
					<Link to="/person"><img src={require('../images/my.png')} alt=""/></Link>
				</li>
			</ul>
		)
	}
}