function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseFloat(productInput.value);
    if (isIncreasing) {
        productInput.value = productNumber + 1;
    }
    else if (productInput.value > 0) {
        productInput.value = productNumber - 1;
    }
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productInput.value * price;
    updateSubtotal();
}
function getInputValue(product) {
    const productTotal = document.getElementById(product + '-total').innerText;
    const productsTotal = parseFloat(productTotal);
    return productsTotal
}

function updateSubtotal() {
    const caseTotal = getInputValue('case');
    const phoneTotal = getInputValue('phone');
    const airbudTotal = getInputValue('airbud');
    const subTotal = caseTotal + phoneTotal + airbudTotal;
    const taxAmount = subTotal / 10;

    const totalAmount = subTotal + Math.floor(taxAmount);

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = Math.floor(taxAmount);
    document.getElementById('total').innerText = totalAmount;
}

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})
document.getElementById('airbud-plus').addEventListener('click', function () {
    updateProductNumber('airbud', 249, true);
})
document.getElementById('airbud-minus').addEventListener('click', function () {
    updateProductNumber('airbud', 249, false);
})

const removeButtons = document.getElementsByClassName('close');

for (const removeButton of removeButtons) {
    removeButton.addEventListener('click', function (event) {
        event.target.parentNode.parentNode.parentNode.style.display = "none";
    })
}