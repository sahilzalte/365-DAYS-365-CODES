function riskyOperation() {
  throw new Error('Something went wrong!');
}

document.getElementById('errorBtn').addEventListener('click', () => {
  const output = document.getElementById('errorOutput');
  try {
    riskyOperation();
    output.textContent = 'Operation succeeded!';
  } catch (error) {
    output.textContent = 'Caught an error: ' + error.message;
  }
});
