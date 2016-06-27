// Ristorante da 'Jimmi'
var menu = {
  apps: [
    'wings', 'nachos', 'soup', 'fries'
  ],
  mains: [{
    name: 'Spaghetti and Meatballs',
    type: 'pasta',
    calories: 700,
    price: 8
  },{
    name: 'Burger w/Fries',
    type: 'sandwich',
    calories: 800,
    price: 9
  },{
    name: 'Club Sandwich',
    type: 'sandwich',
    calories: 750,
    price: 8
  },{
    name: 'Cheese Ravioli',
    type: 'pasta',
    calories: 400,
    price: 7
  },{
    name: 'Spinach Salad',
    type: 'salad',
    calories: 350,
    price: 6
  }]
};


// MAP over each app and make it uppercase
console.log('\n\nAPPS:');
var upperCaseApps = menu.apps.map(function(app) {
  return app.toUpperCase();
});
console.log(upperCaseApps);

// filter out mains over 700 calories
console.log('\n\n"HEALTHY" ITEMS (700 cal or under):');
var healthyItems = menu.mains.filter(function(item) {
  return item.calories <= 700;
});
console.log(healthyItems);

// reduce to find the total price of all main courses on the menu
console.log('\n\nTOTAL MENU PRICE (if ordering 1 of each main course)');

var totalMenuPrice = menu.mains.reduce(function(a, b){
  return { price: a.price + b.price };
});
console.log(totalMenuPrice.price);

// sort

console.log('\n\nMAIN COURSES SORTED BY PRICE');
var sortedByPrice = menu.mains.sort(function(a,b){
  return a.price > b.price;
});

console.log(sortedByPrice);
