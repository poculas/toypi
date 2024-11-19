//declare variables
var cart = []; //container for products to be added
var totalbill = 0.00; //initial value of total amount

//this add elements into cart variable following the specified format, and calculates sum of the price of added elements
function add2cart(name, price) {
    cart.push({ flavor: name, rate: price });
    totalbill += price;
    display();
};

//convert html id into js variable
function display() {
    var cartItems = document.getElementById('cart-items');
    var cartPrice = document.getElementById('cart-price');
    var billElement = document.getElementById('cart-total');
    //empties the content of cartElement variable
    cartItems.innerHTML = '';
    cartPrice.innerHTML = '';

    //each element will be added onto a list 
    cart.forEach(function (pizza) {
    var addedItems = document.createElement('li');
    var bills = document.createElement('li');
    //format for dislaying into the cart
    addedItems.textContent = pizza.flavor;
    bills.textContent = '₱' + pizza.rate.toFixed(2);
    cartItems.appendChild(addedItems);
    cartPrice.appendChild(bills);
    });
    //format for total amount
    billElement.textContent = '₱' + totalbill.toFixed(2);
};

//pop up messege when done ordering
function messege(){
    alert("Thank You for choosing Toypi's! Your order is now being processed, Happy eating~!");
};
