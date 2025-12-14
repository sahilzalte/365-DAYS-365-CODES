// Design patterns
// 1.Module pattern

let Bank1 = (() => {
    let bankbalance = 5000;

    chckeBalance = () => {
        return bankbalance;
    }

    depositeAmount = (amount) => {
        bankbalance += amount;
        return `Your new balance is ${bankbalance}`;
    }

    withdrawAmount = (amount) => {
        if (amount > bankbalance) {
            return `Insufficient balance. Your current balance is ${bankbalance}`;
        } else {
            bankbalance -= amount;
            return `Your new balance is ${bankbalance}`;
        }
    }

    return {
        chckeBalance,
        depositeAmount,
        withdrawAmount
    }

}
)()


console.log(Bank1.chckeBalance());
console.log(Bank1.depositeAmount(2000));
console.log(Bank1.withdrawAmount(1000));
console.log(Bank1.withdrawAmount(7000));

// 2.Revealing module pattern

let Bank2 = (() => {
    let bankbalance = 5000;

    chckeBalance = () => {
        return bankbalance;
    }

    depositeAmount = (amount) => {
        bankbalance += amount;
        return `Your new balance is ${bankbalance}`;
    }

    withdrawAmount = (amount) => {
        if (amount > bankbalance) {
            return `Insufficient balance. Your current balance is ${bankbalance}`;
        } else {
            bankbalance -= amount;
            return `Your new balance is ${bankbalance}`;
        }
    }

    return {
        check: chckeBalance,
        deposite: depositeAmount,
        withdraw: withdrawAmount
    }

}
)()
console.log(Bank2.check());
console.log(Bank2.deposite(3000));
console.log(Bank2.withdraw(1500));
console.log(Bank2.withdraw(8000));