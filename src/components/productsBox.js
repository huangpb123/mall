import React from 'react';
import '../css/productsBox.css';
import { Link } from 'react-router-dom';

export default class ProductsBox extends React.Component {
	render() {
		const resource = this.props.currentCity;
			const productsDOM = resource.map((item, index) => {
					const productsList = (item.products).map((product) => {
						return (<li key={product.id}>
									<Link to={"/detail/"+product.id}>
										<img src={require('../images/products/'+product.img)} alt=""/>
										<p className="dishName">{product.name}</p>
									</Link>
								</li>)
					});
				
				/*
				<div>
					<p className="cityName">杭州特产</p>
					<ul className="products clear">
						<li>
							<Link to="">
								<img src={require('../images/products/dongporou.jpg')} alt=""/>
								<p className="dishName">东坡肉</p>
							</Link>
						</li>
						<li>
							<Link to="">
								<img src={require('../images/products/jiangya.jpg')} alt=""/>
								<p className="dishName">酱鸭</p>
							</Link>
						</li>
					</ul>
				</div>
				*/
				return (
					<div key={index}>
						<p className="cityName">{item.cityName}</p>
						<ul className="products clear">
							{productsList}
						</ul>
					</div>
				)
			});
			
			return (
				<div className="productsBox lf">
					{productsDOM}
				</div>
			)
	}
}