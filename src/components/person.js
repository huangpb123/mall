import React from 'react';
import '../css/person.css';
import Footer from './footer';

export default class Person extends React.Component {
	render() {
		return (
			<div className="personBox">
				<div className="header">
					<div className="lf">
						<img src={require('../images/bigHead.jpg')} alt=""/>
					</div>
					<span>huangpanbin</span>
				</div>
				<div className="locationBox">
					<div className="location">
						<p className="user">收货人: 黄攀斌
							<span className="rt">15168353308</span>
						</p>
						<p>收货地址: 杭州市余杭区梦想小镇110号</p>
					</div>
				</div>
				<Footer/>
			</div>
		)
	}
}