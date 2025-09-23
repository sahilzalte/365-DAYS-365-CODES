// early return pattern

function processOrder(order) {
    if (order.value < 100) return "Order value too low";
    if (order.value > 1000) return "Order value too high";

    // Process the order
    console.log("Processing order:", order);
}
// Example usage
const order1 = { id: 1, value: 50 };