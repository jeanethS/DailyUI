let nameCard = document.getElementById("cardName");
let expDate = document.getElementById("cardDate");
let cvv = document.getElementById("cardCvv");
let imgCardName = document.getElementById("cardImageName");
let imgCardDate = document.getElementById("cardImageDate");
let imgCardCvv = document.getElementById("cardImageCvv");
document.getElementById('cardNumber').addEventListener('keyup', event => {
    document.getElementById("cardImageNumber").value = document.getElementById("cardNumber").value;
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