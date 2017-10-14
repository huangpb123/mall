import React from 'react';
import '../css/home.css';
import Header from './header';
import Footer from './footer';
import ProductsBox from './productsBox';

export default class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: '',
			cities: '',
			active: 'ZJ'
		};
	}
	
	handleClick(value) {
		/*点击的时候发起ajax请求*/
		this.setState({active: value});
	}
	
	render() {
		let homeBody = '';
		if(this.state.data){
			homeBody = (
				<div className="homeBody clear">
					{this.state.cities()}
					<ProductsBox currentCity={this.state.data[this.state.active]}/>
				</div>
			);
		}	
		
		return (
			<div className="homeBox">
				<Header/>
				{ homeBody }
				<Footer/>
			</div>
		)
	}
	
	componentDidMount() {
//		sessionStorage.clear();
		/*从后台获取数据赋值给state*/
		const response = {
			ZJ: [
				{
					cityName: "杭州特产",
					products: [
						{id:"dongporou", img: "dongporou.jpg", name: "东坡肉"},
						{id:"jiangya", img: "jiangya.jpg", name: "酱鸭"}
					]
				}
			],
			SC: [
				{
					cityName: "成都特产",
					products: [
						{id:"shuizhuyu", img: "shuizhuyu.jpg", name: "水煮鱼"},
						{id:"maoxuewang", img: "maoxuewang.jpg", name: "毛血旺"}
					]
				}
			]
		};
		
		const cities = [
				{name: "浙江特产", value: "ZJ"},
				{name: "四川特产", value: "SC"},
				{name: "广东特产", value: "GD"},
				{name: "江西特产", value: "JX"},
				{name: "北京特产", value: "BJ"},
				{name: "湖南特产", value: "HN"},
				{name: "上海特产", value: "SH"},
			];
		
		/*渲染出左边城市列表的函数*/
		const createCityList = () => {
			let activeCityClass;
			var cityList = cities.map((city,index) => {
				activeCityClass = this.state.active === city.value ? "active" : "";
				return (<li key={city.value}><a className={activeCityClass} onClick={this.handleClick.bind(this,city.value)}>{city.name}</a></li>);
			});
			
			return (
				<ul className="cityList lf">{cityList}</ul>
			);
		}
		
		this.setState({
			data: response,
			cities: createCityList
		});
	}
}