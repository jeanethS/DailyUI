let nameCard = document.getElementById("cardName");
let expDate = document.getElementById("cardDate");
let cvv = document.getElementById("cardCvv");
let imgCardName = document.getElementById("cardImageName");
let imgCardDate = document.getElementById("cardImageDate");
let imgCardCvv = document.getElementById("cardImageCvv");
let cardNumber = document.getElementById('cardNumber');
cardNumber.addEventListener('keyup', event => {
    document.getElementById("cardImageNumber").value = cardNumber.value;
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