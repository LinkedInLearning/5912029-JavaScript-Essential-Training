function calculateTax(price) {
  const taxRate = 1.1;
  return price * taxRate;
}

console.log(calculateTax(1000));
console.log(calculateTax(480));
