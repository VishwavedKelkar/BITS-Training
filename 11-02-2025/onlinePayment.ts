// ## Online Payment System

// Create Payment class with amount, date.
// Subclasses: CreditCardPayment, PayPalPayment, CryptoPayment.
// Abstraction: Hide sensitive details like #cardNumber.

class Payment {
    amount: number;
    date: Date;
    constructor(amount: number, date: Date) {
        this.amount = amount;
        this.date = date;
    }
}

class CreditCardPayment extends Payment {
    private cardNumber: number;
    constructor(amount: number, date: Date, cardNumber: number) {
        super(amount, date);
        this.cardNumber = cardNumber;
    }
    paymentProcess(): void {
        console.log(`Credit Card payment process of amount ${this.amount} is done on ${this.date}`);
    }
}

class PayPalPayment extends Payment {
    private email: string;
    constructor(amount: number, date: Date, email: string) {
        super(amount, date);
        this.email = email;
    }
    paymentProcess(): void {
        console.log(`Process of amount ${this.amount} on ${this.date} is successful`);
    }
}

class CryptoPayment extends Payment {
    private walletAddress: string;
    private private_key: string;
    constructor(amount: number, date: Date, walletAddress: string, private_key: string) {
        super(amount, date);
        this.walletAddress = walletAddress;
        this.private_key = private_key;
    }
    paymentProcess(): void {
        console.log(`Crypto payment of ${this.amount} BTC done on ${this.date}`);
    }
}

const creditcardPayment = new CreditCardPayment(100, new Date(), 123456789);
const paypalPayment = new PayPalPayment(50, new Date(), 'example@gmail.com');
const cryptoPayment = new CryptoPayment(10, new Date(), 'wallet-address-1234', '12ascdxc3456asc787654dsv3');

creditcardPayment.paymentProcess();
paypalPayment.paymentProcess();
cryptoPayment.paymentProcess();

//output:
// Credit Card payment process of amount 100 is done on Tue Feb 11 2025 15:30:28 GMT+0530 (India Standard Time)
// Process of amount 50 on Tue Feb 11 2025 15:30:28 GMT+0530 (India Standard Time) is successful
// Crypto payment of 10 BTC done on Tue Feb 11 2025 15:30:28 GMT+0530 (India Standard Time)