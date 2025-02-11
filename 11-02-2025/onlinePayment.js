// ## Online Payment System
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Create Payment class with amount, date.
// Subclasses: CreditCardPayment, PayPalPayment, CryptoPayment.
// Abstraction: Hide sensitive details like #cardNumber.
var Payment = /** @class */ (function () {
    function Payment(amount, date) {
        this.amount = amount;
        this.date = date;
    }
    return Payment;
}());
var CreditCardPayment = /** @class */ (function (_super) {
    __extends(CreditCardPayment, _super);
    function CreditCardPayment(amount, date, cardNumber) {
        var _this = _super.call(this, amount, date) || this;
        _this.cardNumber = cardNumber;
        return _this;
    }
    CreditCardPayment.prototype.paymentProcess = function () {
        console.log("Credit Card payment process of amount ".concat(this.amount, " is done on ").concat(this.date));
    };
    return CreditCardPayment;
}(Payment));
var PayPalPayment = /** @class */ (function (_super) {
    __extends(PayPalPayment, _super);
    function PayPalPayment(amount, date, email) {
        var _this = _super.call(this, amount, date) || this;
        _this.email = email;
        return _this;
    }
    PayPalPayment.prototype.paymentProcess = function () {
        console.log("Process of amount ".concat(this.amount, " on ").concat(this.date, " is successful"));
    };
    return PayPalPayment;
}(Payment));
var CryptoPayment = /** @class */ (function (_super) {
    __extends(CryptoPayment, _super);
    function CryptoPayment(amount, date, walletAddress, private_key) {
        var _this = _super.call(this, amount, date) || this;
        _this.walletAddress = walletAddress;
        _this.private_key = private_key;
        return _this;
    }
    CryptoPayment.prototype.paymentProcess = function () {
        console.log("Crypto payment of ".concat(this.amount, " BTC done on ").concat(this.date));
    };
    return CryptoPayment;
}(Payment));
var creditcardPayment = new CreditCardPayment(100, new Date(), 123456789);
var paypalPayment = new PayPalPayment(50, new Date(), 'example@gmail.com');
var cryptoPayment = new CryptoPayment(10, new Date(), 'wallet-address-1234', '12ascdxc3456asc787654dsv3');
creditcardPayment.paymentProcess();
paypalPayment.paymentProcess();
cryptoPayment.paymentProcess();
