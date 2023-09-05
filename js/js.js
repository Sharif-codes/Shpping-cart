function getElement(id) {
    const element = document.getElementById(id)
    return element
}

// total price add function
function setTotalPrice(id, price) {
    let previousPrice = getElement(id).innerText
    const newPrice = parseFloat(previousPrice) + parseFloat(price)
    getElement(id).innerText = newPrice.toFixed(2)
    if (newPrice >= 200) {
        const applyBtn = getElement('apply-btn')
        applyBtn.removeAttribute('disabled')
        applyBtn.style.backgroundColor = '#E527B2'
    }
    if(newPrice>0)
    {
        const purchaseBtn= getElement('purchase-btn')
        purchaseBtn.removeAttribute('disabled')
        purchaseBtn.removeAttribute('title')
        purchaseBtn.style.backgroundColor= '#E527B2'
    }
    getElement('grand-price').innerText= newPrice.toFixed(2)

}

function setGrandTotal(p,d){
    const Total= p-d
    getElement('grand-price').innerText= Total.toFixed(2)
}

getElement('apply-btn').addEventListener('click', function () {
    let priceText = getElement('total-price').innerText
    let price= parseFloat(priceText)
    const couponText = getElement('coupon-input').value
    if (couponText == 'SELL200') {

        let discount = price * .20
        getElement('discount').innerText = discount.toFixed(2)
        setGrandTotal(price, discount)

    }
})
getElement('apply-btn').setAttribute('title','Add product of 200Tk for apply coupon')


getElement('prod1').addEventListener('click', function () {
    const name = getElement('prod1-name').innerText
    const priceText = getElement('prod1-price').innerText
    addToCart(name)
    setTotalPrice('total-price', priceText)
})
getElement('prod2').addEventListener('click', function () {
    const name = getElement('prod2-name').innerText
    const priceText = getElement('prod2-price').innerText
    addToCart(name)
    setTotalPrice('total-price', priceText)

})
getElement('prod3').addEventListener('click', function () {
    const name = getElement('prod3-name').innerText
    const priceText = getElement('prod3-price').innerText
    addToCart(name)
    setTotalPrice('total-price', priceText)


})
getElement('prod4').addEventListener('click', function () {
    const name = getElement('prod4-name').innerText
    const priceText = getElement('prod4-price').innerText
    addToCart(name)
    setTotalPrice('total-price', priceText)


})
getElement('prod5').addEventListener('click', function () {
    const name = getElement('prod5-name').innerText
    const priceText = getElement('prod5-price').innerText
    addToCart(name)
    setTotalPrice('total-price', priceText)


})
getElement('prod6').addEventListener('click', function () {
    const name = getElement('prod6-name').innerText
    const priceText = getElement('prod6-price').innerText
    addToCart(name)
    setTotalPrice('total-price', priceText)

})
getElement('purchase-reload').addEventListener('click',function(){
    location.reload();
})

function addToCart(name) {
    const cartEntry = document.getElementById('item')
    const count = cartEntry.childElementCount
    const p = document.createElement('p')
    p.innerHTML = `${count + 1}. ${name}`
    cartEntry.appendChild(p)
}



