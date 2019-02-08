
export const ferr = (deck) => {
    const length = deck.length;
    const dividePoint = length / 2;
    const rest = length - dividePoint;
    const bunch1 = deck.slice(0, dividePoint);
    const bunch2 = deck.slice(dividePoint);   
    console.warn(deck, bunch1, bunch2); 
}

