function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

document.getElementById('factBtn').addEventListener('click', () => {
  const output = document.getElementById('factOutput');
  const result = factorial(5);
  output.textContent = 'Factorial of 5 is: ' + result;
});
