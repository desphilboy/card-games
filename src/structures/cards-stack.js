class CardsStack extends Array{

	constructor(name, ...params) {
		super(params);
		this.name = name;
		console.log('constructor for cards stack is being called');
	}

	replaceNth(card, i) {
		let newCard = Object.assign({}, card);
		return this[i] = newCard;
	}


	insertTop(card) {
		return this.push(Object.assign({}, card));
	}


	drawTop(){
		return this.pop();
	}
}


export default CardsStack;