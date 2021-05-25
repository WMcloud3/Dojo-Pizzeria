function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses
    pizza.toppings = toppings
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", "mozzarela", ["pepperoni", "sausage"] )

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarela", "feta"], ["mushrooms", "olives", "onions"] )

var pizza3 = pizzaOven("deep dish", "traditional", "mozzarela", ["pepperoni", "sausage"] )

var pizza4 = pizzaOven("hand tossed", "marinara", ["mozzarela", "feta"], ["mushrooms", "olives", "onions"] )

console.log(pizza2)
