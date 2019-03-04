// very flexible rule definition, and I think simpler than needing any description
const rules = [
{ atv: 3, discount: { money: 109.50 } },
{ ipd: 4, discounts: { money: 0 , product:{ ipd: 459.99 } } },
{ mbp: 1, discounts: { money: 0 , product:{ vga: 0 } } },
];


// prices here again quite clear 
const prices = {
    ipd: 549.99,
    mbp: 1399.99,
    atv: 109.5,
    vga: 30.0,
};

const NO_DISCOUNT = { money: 0, product: '', };

function main(shoppingList, rules) {
    // this is our high level main
    const discounts = [NO_DISCOUNT];

    rules.forEach(rule => discounts.push(matchRule(rule, shoppingList)));
    return calculateNormalPrice(shoppingList) - calculateMax(discounts, shoppingList);
}


function matchRule(rule, shoppingList) {
// this is rule matching , it looks if we have equal or more than the rule number of each item in our shopping list
    const aggregatedList = aggregateList(shoppingList);
    return matchRuleWithAggregatedList(aggregatedList, rule) ? rule.discount : NO_DISCOUNT

}

function aggregateList(list) {
    // this is accepting a list and gives us count of items.
    const listToArray = split(list, ',');
    const aggregated = {};
    for(let i = 0; i < listToArray.length; ++i){
        if(aggregated[listToArray[i]]) {
            aggregated[listToArray[i]] += 1;
        } else {
            aggregated[listToArray[i]] = 0;
        }
    }

    return aggregated;
}


function matchRuleWithAggregatedList(aggregated, rule) {
    // this gets a rule of the above form , and tells us if this rule is matching this list or not
    for(let i = 0; i < rule.keys().length -1; ++i){
        if(aggregated[rule.keys()[i]] < rule.values()[i])
        return false; 
    }

    retrun true;
}


function calculateMax(discounts, list) {
    // this functions simply calculates discount for each rule and returns the maximum of all
    const maxMoneyAndProduct = ... 
}


/* as per request I did not spend a long time on this solution, Just gave you the idea, 
to find out How am I sophisticated in JavaScript look at rest of my repo please
regars, Iman */ 