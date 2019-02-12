import { deepClone } from '../../utils/clone';
import { getRandomInt } from '../../utils/random';

export function ferr(deck){
    const dividePoint = deck.length / 2;
    const bunch1 = deepClone(deck.slice(0, dividePoint));
    const bunch2 = deepClone(deck.slice(dividePoint));

    let result = [];
    let bunchCounter1 = 0;
    let bunchCounter2 = 0;
    
    while(bunch1.length > 0 || bunch2.length > 0){
        let b1Drops = getRandomInt(3);
        let b2Drops = getRandomInt(3);

        for(let i = 0; i < b1Drops && bunch1.length > 0; ++i) {
            result.push(bunch1[0]);
            bunch1.shift();
        }

        for(let i = 0; i < b2Drops && bunch2.length > 0; ++i) {
            result.push(bunch2[0]);
            bunch2.shift();
        }
    }

    return result;
}

export function morr(deck){
    const dividePoint = getRandomInt(deck.length);
    let bunch1 = deepClone(deck.slice(0, dividePoint));
    let bunch2 = deepClone(deck.slice(dividePoint));

    return bunch2.concat(bunch1);
}

export function borr(deck){
        const dp1 = getRandomInt(deck.length);
        const dp2 = getRandomInt(dp1);
        let bunch1 = deepClone(deck.slice(0, dp2));
        let bunch2 = deepClone(deck.slice(dp2,dp1));
        let bunch3 = deepClone(deck.slice(dp1));
        return bunch2.concat(bunch1).concat(bunch3);
}

export function ferrShuffle(deck, times = 2){
    let result = deck;
    for(let i = 0; i < times; ++i){
        result = ferr(result);
    }

    return result;
}

export function borrShuffle(deck, times = 3){
    let result = deck;
    for(let i = 0; i < times; ++i){
        result = borr(result);
    }

    return result;
}

export function morrShuffle(deck, times = 3){
    let result = deck;
    for(let i = 0; i < times; ++i){
        result = morr(result);
    }

    return result;
} 