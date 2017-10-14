import React from 'react';
import "../css/header.css";

export default class Header extends React.Component {
	render() {
		return (
			<header className="clear">
				<form action="">
					<img src={require('../images/search.png')} alt=""/>
					<input type="text"  placeholder="水果"/>
				</form>
			</header>
		)
	}
}
