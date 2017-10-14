import React from 'react';
import '../css/order.css';
import { Link } from 'react-router-dom';
import OrderProduct from './orderProduct';

export default class Order extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			html: ''
		}
		
		this.returnFunc = this.returnFunc.bind(this);
		this.orderSubmit = this.orderSubmit.bind(this);
	}
	
	returnFunc() {
		this.props.history.goBack();
	}
	
	orderSubmit() {
		alert("订单提交成功！");
	}
	
	render() {
		return (
			<div className="order">
				<header className="clear">
					<img src={require('../images/returnWhite.png')} className="lf" onClick={this.returnFunc} alt=""/>
					<p>确认订单</p>
				</header>
				<div className="container">
					<div>
						<p className="user">收货人: 黄攀斌
							<span className="rt">15168353308</span>
						</p>
						<p>收货地址: 杭州市余杭区梦想小镇110号</p>
					</div>
					<hr/>
					<div className="orderBox">
						{this.state.html}
					</div>
				</div>
				<footer className="orderFooter">
					<div className="rt">
						<p className="lf total">合计: 
							<span className="orderRrice">&yen;&nbsp;
								<span>{this.props.match.params.total}</span>
							</span>
						</p>
						<Link to="/home" onClick={this.orderSubmit}>提交订单</Link>
					</div>
				</footer>
			</div>
		)
	}
	
	componentDidMount() {
		const data = JSON.parse(sessionStorage.getItem("current"));
		const html = data.map((item) => (
			<OrderProduct productMSG={item} key={item.id}/>
		));
		this.setState({html: html});
	}
}