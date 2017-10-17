import React from 'react';
import '../css/productsBox.css';
import { Link } from 'react-router-dom';

export default class ProductsBox extends React.Component {
	render() {
		var resource = this.props.currentCity;
		var productsDOM = resource.map((item, index) => {
				var productsList = (item.products).map((product) => {
						return (<li key={product.id}>
									<Link to={"/detail/"+product.id}>
										<img src={require('../images/products/'+product.img)} alt=""/>
										<p className="dishName">{product.name}</p>
									</Link>
								</li>)
				});
				
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