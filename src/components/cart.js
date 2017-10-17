import React from 'react';
import '../css/cart.css';
import Footer from './footer';
import formatePrice from '../api/formatePrice';
import CartProduct from './cartProduct';

export default class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.allPick = this.allPick.bind(this);
		this.payment = this.payment.bind(this);
		this.inputClick = this.inputClick.bind(this);
		this.deleteItemFather = this.deleteItemFather.bind(this);
		this.addDeleteCount = this.addDeleteCount.bind(this);
		this.returnBack = this.returnBack.bind(this);
		
		this.state = {
			data: "",
			total: "0.00",
			html: ""
		};
	}
	
	componentWillMount() {
		var lists = [];
		for(var key in sessionStorage){
			if(key !== "current"){
				lists.push(JSON.parse(sessionStorage[key]));
			}
		}
		
		/* 创建购物车里面物品的html */
		var html = lists.map((item, index) => (
			<CartProduct productMSG={item} index={index} inputClick={this.inputClick} addDeleteCount={this.addDeleteCount} deleteItemFather={this.deleteItemFather} key={item.id}/>
		));
		
		this.setState({
			data: lists,
			html: html
		});
	}
	
	returnBack() {
		this.props.history.goBack();
	}
	
	addDeleteCount(lessOrAdd, index, id) {
		/*用本地存储代替数据库*/
		var product = JSON.parse(sessionStorage.getItem(id));
		if(lessOrAdd === 'less') {
			product.count -= 1;
		}else if(lessOrAdd === 'add') {
			product.count += 1;
		}
		sessionStorage.setItem(id, JSON.stringify(product));
	}
	
	inputClick(isChecked, value) {
		if(isChecked) {
			this.setState((prevState) => ({total: formatePrice(Number(prevState.total)+Number(value))}));
		}else{
			this.setState((prevState) => ({total: formatePrice(Number(prevState.total)-Number(value))}));
		}
	}
	
	deleteItemFather(isChecked, id) {
		if(isChecked){
			var product = JSON.parse(sessionStorage.getItem(id));
			var price = product.price * product.count;
			this.setState((prevState) => ({total: formatePrice(Number(prevState.total) -　price)}));
		}
		sessionStorage.removeItem(id);
		this.componentWillMount();
	}
	
	/*全选*/
	allPick(event) {
		var inputs = document.querySelectorAll('.cartContainer input');
		if(event.target.checked){
			for(var i=0; i<inputs.length; i++){
				inputs[i].checked = true;
			}
			var total = 0;
			for(var key in sessionStorage) {
				if(key !== "current") {
					var item = JSON.parse(sessionStorage[key]);
					total += item.count * item.price;
				}
			}
			this.setState({total: formatePrice(total)});
		}else{
			for(var j=0; j<inputs.length; j++){
				inputs[j].checked = false;
			}
			this.setState({total: "0.00"});
		}
	}
	
	/* 结算 */
	payment() {
		if(this.state.total === "0.00") {
			alert("您没有购买任何物品!");
		}else {
			var inputs = document.querySelectorAll('.cartBox .item>input');
			var products = [];
			for(var i=0; i<inputs.length; i++){
				if(inputs[i].checked){
					var item = sessionStorage.getItem(this.state.data[i].id);
					products.push(JSON.parse(item));
				}
			}
			sessionStorage.setItem("current",JSON.stringify(products));
			this.props.history.push("/order/"+this.state.total);
		}
	}
	
	render() {
		return (
			<div className="cartBox">
				<div className="cartHeader">
					<img src={require('../images/returnWhite.png')} onClick={this.returnBack} alt=""/>
					购物车({this.state.data.length})
				</div>
				<div className="cartContainer">
					{this.state.html}
				</div>
				<ul className="payBox clear">
					<li className="allPick">
						<label>
							<input type="checkbox" onClick={this.allPick}/>全选
						</label>
					</li>
					<li>合计: 
						<span className="total">&yen;{this.state.total}</span>
					</li>
					<li>
						<a onClick={this.payment}>结算({this.state.total})</a>
					</li>
				</ul>
				<Footer/>
			</div>
		)
	}
}
