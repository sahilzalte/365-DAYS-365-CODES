// Design patterns
// Observer Pattern

class Youtube {
    constructor() {
        this.subscribers = []
    }
    subscribe(user) {
        this.subscribers.push(user)
        user.update('You have successfully subscribed!')

    }
    unsubscribe(user) {
        this.subscribers = this.subscribers.filter(u => u.name !== user)
        user.update('You have successfully unsubscribed!')
    }
    notify() {
        this.subscribers.forEach(user => user.update('New video uploaded!'))
    }
}

class User {
    constructor(name) {
        this.name = name
    }
    update(data) {
        console.log(`${this.name} received message: ${data}`)
    }

}
const youtube = new Youtube()
const user1 = new User('John')

youtube.subscribe(user1)