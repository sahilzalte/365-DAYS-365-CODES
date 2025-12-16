// Design patterns

class Youtube {
    constructor() {
        this.subscribers = []
    }
    subscribe(user) {
        this.subscribers.push(user)
            
    }
    unsubscribe(user) { 
        // this.subscribers = this.subscribers.filter(u => u.name !== user.name)
    }
    notify() { }
}

class User {
    constructor(name) {
        this.name = name
    }
    update(data) {

    }

}