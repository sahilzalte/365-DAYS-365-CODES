// Design patterns
// Factory function pattern

function createProduct(name, price) {
    let stock = 10
    return {
        name, price,
        checkStock() {
            console.log(`Current stock of ${name}: ${stock}`)
        },
        buy(quantity) {
            if (quantity <= stock) {
                stock -= quantity
                console.log(`${quantity} pieces Booked - ${stock} items left in stock.`)
            }
            else {
                console.log('Not enough stock available.')
            }
        },
        refill(quantity) {
            stock += quantity
            console.log(`Refilled - ${stock} items now in stock.`)
        }
    }
}


const book = createProduct('Book', 9.99)

book.buy(3)