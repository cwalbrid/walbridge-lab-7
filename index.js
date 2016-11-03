//this is my grocery list Array

var groceryList = [
		{
			name: 'Eggs',
			price: 2.19
		},
		{
			name: 'Milk',
			price: 2.12
		},
		{
			name: 'Cereal',
			price: 3.99
		},
		{
			name: 'Bread',
			price: 2.99
		},
		{
			name: 'Cheese',
			price: 4.99
		}
	]
	
	
//this is a forEach loop that lists each item's name and price

groceryList.forEach(function(groceryItem){
	console.log(groceryItem.name + "- $" + groceryItem.price.toFixed(2))
});


//this is a For loop that adds up the prices of each item

var total = 0;

for (var i = 0; i < groceryList.length; i++){
	total += groceryList[i].price;
}

console.log("Total: $" + total.toFixed(2))