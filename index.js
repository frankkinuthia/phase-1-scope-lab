// Write your solution in this file!
// tried declaring `bob` using let &/ const but failed the tests, so:
var customerName = 'bob';

const leastFavoriteCustomer = 'some initial value'

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
}

function setBestCustomer() {
  bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'node'
}