import React from 'react';
import '../css/detail.css';
import { Link } from 'react-router-dom';

export default class Detail extends React.Component {
	constructor(props) {
		super(props);
		this.joinShoppingCar = this.joinShoppingCar.bind(this);
		this.buyNow = this.buyNow.bind(this);
		this.returnFunc = this.returnFunc.bind(this);
		this.buyNow = this.buyNow.bind(this);
		
		this.state = {detailMSG: {img:"none.jpg"}};
	}
	
	joinShoppingCar() {
		/*正常情况下加入购物车应该添加到数据库*/
		const detailMSG = this.state.detailMSG;
		sessionStorage.setItem(detailMSG.id, JSON.stringify(detailMSG));
		alert("加入购物车成功!");
	}
	
	buyNow() {
		/*把本产品信息储存到本地*/
		const product = [];
		product.push(this.state.detailMSG);
		sessionStorage.setItem("current", JSON.stringify(product));
	}
	
	returnFunc() {
		this.props.history.goBack();
	}
	
	render() {
		const data = this.state.detailMSG;

		return (
			<div className="detail">
				<div className="imgBox">
					<img className="return" onClick={this.returnFunc} src={require('../images/return2.png')} alt=""/>
					<Link to="/cart">
						<img className="shoppingCart" src={require('../images/shoppingCart.png')} alt=""/>
					</Link>
					<img className="img_lg" src={require('../images/products/'+data.img)} alt=""/>
				</div>
				<div className="wordsBox">
					<p>{data.detail}</p>
					<b className="price">&yen; <span>{data.price}</span></b>
				</div>
				<div className="detailFooter">
					<div className="rt">
						<a className="join" onClick={this.joinShoppingCar}>加入购物车</a>
						<Link to={"/order/"+data.price} className="buy" onClick={this.buyNow}>立即购买</Link>
					</div>
				</div>
			</div>
		)
	}
	
	componentDidMount() {
		/*模拟数据库*/
		const data = {
			dongporou: {id:"dongporou", count:1, img:"dongporou_lg.jpg", img_s:"dongporou.jpg", price:"35.00", detail:"东坡肉又名红烧肉、滚肉、东坡焖肉，是江南地区特色传统名菜。"},
			jiangya: {id:"jiangya", count:1, img:"jiangya_lg.jpg", img_s:"jiangya.jpg", price:"40.00", detail:"酱鸭是江南地区的特色传统风味名菜之一。其因色泽黄黑而得名，具有香、鲜、酥、嫩的特点。"},
			shuizhuyu: {id:"shuizhuyu", count:1, img:"shuizhuyu_lg.jpg", img_s:"shuizhuyu.jpg", price:"42.00", detail:"水煮鱼又称江水煮江鱼，属于川菜系，最早流行于重庆市渝北区翠云乡。"},
			maoxuewang: {id:"maoxuewang", count:1, img:"maoxuewang_lg.jpg", img_s:"maoxuewang.jpg", price:"35.00", detail:"毛血旺，起源于重庆，流行于重庆和西南地区，是一道著名的传统菜式，以鸭血为制作主料。"}
		}
		
		const param = this.props.match.params.dishID;
		this.setState({detailMSG: data[param]});
	}
}