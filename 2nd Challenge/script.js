let nameCard = document.getElementById("cardName");
let expDate = document.getElementById("cardDate");
let cvv = document.getElementById("cardCvv");
let imgCardName = document.getElementById("cardImageName");
let imgCardDate = document.getElementById("cardImageDate");
let imgCardCvv = document.getElementById("cardImageCvv");
let cardNumber = document.getElementById('cardNumber');
let mastercard = document.getElementById("masterCardSVG");
let visa = document.getElementById("visaSVG");
let amex = document.getElementById("amexSVG");

cardNumber.addEventListener('keyup', event => {
    document.getElementById("cardImageNumber").value = cardNumber.value;
    toggleCardTypeSVG(cardNumber.value);
});
nameCard.addEventListener('keyup', event => {
    imgCardName.value = nameCard.value;
});
expDate.addEventListener('keyup', event => {
    imgCardDate.value = expDate.value;
});
cvv.addEventListener('keyup', event => {
    imgCardCvv.value = cvv.value;
});
//verify wethever the card is valid or not using the card number and the algorithm luhn
function luhnCheck(cardNumber) {
    var sum = 0;
    var numdigits = cardNumber.length;
    var parity = numdigits % 2;
    for (var i = 0; i < numdigits; i++) {
        var digit = parseInt(cardNumber.charAt(i));
        if (i % 2 == parity) digit *= 2;
        if (digit > 9) digit -= 9;
        sum += digit;
    }
    return (sum % 10) == 0;
}
const cardType = cardNumber => {
    if (cardNumber.startsWith("4")) {
        return "Visa";
    } else if (cardNumber.startsWith("5")) {
        return "MasterCard";
    } else if (cardNumber.startsWith("3")) {
        return "American Express";
    } else {
        return "Invalid";
    }
}

function validateCard() {
    if (cardNumber.value.length == 0) {
        return false;
    }
    if (luhnCheck(cardNumber.value)) {
        return true;
    } else {
        return false;
    }
}

function validateName() {
    if (nameCard.value.length == 0) {
        return false;
    }
    return true;
} //validate the expiry date
function validateDate() {
    if (expDate.value.length == 0) {
        return false;
    }
    return true;
} //validate the cvv
function validateCvv() {
    if (cvv.value.length == 0) {
        return false;
    }
    return true;
}

function validate() {
    if (validateCard() && validateName() && validateDate() && validateCvv()) {
        return true;
    } else {
        return false;
    }
} //validate the card number
function toggleCardTypeSVG(cardNumber) {
    if (cardType(cardNumber) == "MasterCard") {
        mastercard.classList.add("visible");
        mastercard.classList.remove("invisible");
        visa.classList.remove("visible");
        amex.classList.remove("visible");
        visa.classList.add("invisible");
        amex.classList.add("invisible");
    } else if (cardType(cardNumber) == "Visa") {
        mastercard.classList.remove("visible");
        visa.classList.add("visible");
        visa.classList.remove("invisible");
        amex.classList.remove("visible");
        mastercard.classList.add("invisible");
        amex.classList.add("invisible");
    } else if (cardType(cardNumber) == "American Express") {
        mastercard.classList.remove("visible");
        visa.classList.remove("visible");
        amex.classList.add("visible");
        amex.classList.remove("invisible");
        mastercard.classList.add("invisible");
        visa.classList.add("invisible");
    } else {
        mastercard.classList.remove("visible");
        visa.classList.remove("visible");
        amex.classList.remove("visible");
        mastercard.classList.add("invisible");
        visa.classList.add("invisible");
    }
}