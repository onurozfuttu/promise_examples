const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:

const handleSuccess = (success) => {
  console.log(success);
}

const handleFailure = (failure) => {
  console.log(failure);
}

checkInventory(order).then(handleSuccess, handleFailure);

