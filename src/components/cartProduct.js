import React from 'react';

export default class CartProduct extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.less = this.less.bind(this);
		this.add = this.add.bind(this);
		
		this.state = {count: this.props.productMSG.count};
	}
	
	/*单个物品复选框点击*/
	handleClick() {
		var isChecked = this.inputTag.checked;
		var value = this.props.productMSG.price * this.state.count;
		this.props.inputClick(isChecked, value);
	}
	
	/*删除*/
	deleteItem() {
		this.props.deleteItemFather(this.inputTag.checked,  this.props.productMSG.id);
	}
	
	/*数量减*/
	less() {
		this.setState((prevState) => ({count: prevState.count-1}));
		this.props.addDeleteCount('less',this.props.index, this.props.productMSG.id);
		if(this.inputTag.checked) {
			this.props.inputClick(true, -Number(this.props.productMSG.price ));
		}
	}
	
	/*数量加*/
	add() {
		this.setState((prevState) => ({count: prevState.count+1}));
		this.props.addDeleteCount('add',this.props.index, this.props.productMSG.id);
		if(this.inputTag.checked) {
			this.props.inputClick(true, this.props.productMSG.price );
		}
	}
	
	render() {
		var item = this.props.productMSG;
		return (
			<div className="item clear">
				<input type="checkbox" className="lf" ref={(input) => {this.inputTag = input}} onClick={this.handleClick}/>
				<div className="clear lf">
					<div className="lf">
						<img src={require('../images/products/'+item.img_s)} alt=""/>
					</div>
					<div className="detail lf">
						<p>{item.detail}</p>
						<span className="returned">七天退换</span>
						<div className="price">
							&yen; <span>{item.price}</span>
							<div className="rt">
								<button onClick={this.less} disabled={(this.state.count === 1) ? true : false}>-</button> {this.state.count} <button onClick={this.add}>+</button>
							</div>
						</div>
					</div>
				</div>
				<img src={require('../images/delete.png')} onClick={this.deleteItem} name={item.id+'&'+item.price} alt=""/>
			</div>
		)
	}
}