const formatePrice = (value) => {
	const price = String(value);
	const index = price.indexOf('.');
	if(index === -1){
		return (price + '.00');
	}else if((price.length - index) === 2){
		return (price + '0');
	}else{
		return price;
	}
}

export default formatePrice;