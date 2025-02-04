class Payment {
    constructor(amount, date) {
        this.amount = amount;
        this.date = date;
    }

}

class CreditcardPayment extends Payment {
    constructor(amount, date, creditCardNum) {
        super(amount, date);
        this._creditCardNum = creditCardNum;
    }
    getCreditCardNum() {
        return this._creditCardNum;
    }
    setCreditCardNum(value) {
        this._creditCardNum = value;
    }
    processPayment() {
        console.log(`processing credit card payment of ${this.amount} on ${this.date}`);
    }
}

class PayPalPayment extends Payment {
    constructor(amount, date) {
        super(amount, date);
    }
    processPayment() {
        console.log(`processing paypal payment of ${this.amount} on ${this.date}`);
    }
}

class CryptoPayment extends Payment {
    constructor(amount, date, cryptoType) {
        super(amount, date);
        this.cryptoType = cryptoType;
    }
    processPayment() {
        console.log(`processing crypto payment of ${this.amount} ${this.cryptoType} on ${this.date}`);
    }
}

const creditCard = new CreditcardPayment(100, "2025-02-04", "1234-5678-9876-5432");
const paypal = new PayPalPayment(200, "2025-02-04");
const crypto = new CryptoPayment(30, "2025-02-04", "Bitcoin");

creditCard.processPayment();
paypal.processPayment();
crypto.processPayment();
