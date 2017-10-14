import React from 'react';

export default class OrderProduct extends React.Component {
	render() {
		const data = this.props.productMSG;
		return (
			<div>
				<div className="clear">
					<div className="lf">
						<img src={require('../images/products/'+data.img_s)} alt=""/>
					</div>
					<div className="detail lf">
						<p>{data.detail}</p>
						<span className="returned">七天退换</span>
						<p className="price">
							&yen; <span>{data.price}</span>
							<span className="rt">x{data.count}</span>
						</p>
					</div>
				</div>
			</div>
		)
	}
}