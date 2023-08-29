let totalPrice = 0;

// set inner text for display total-price, discount, total
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

function handleCard(target){
    // get item name
    const itemName = target.childNodes[5].innerText;

    // show item name
    const selectedItems = document.getElementById("selected-items");
    const count = selectedItems.childElementCount;
    const p = document.createElement('p');
    p.classList.add('mb-2');
    p.innerText = `${count + 1}. ${itemName}`;
    selectedItems.appendChild(p);

    // calculate price
    const price = target.childNodes[7].innerText.split(" ")[0];
    totalPrice = parseFloat(totalPrice) + parseFloat(price);

    // show total-price and total
    setInnerText("total-price", totalPrice.toFixed(2));
    setInnerText("total", totalPrice.toFixed(2));

    // disable and enable purchase button
    const purchaseButton = document.getElementById("purchase-btn");
    if (totalPrice > 0){
        purchaseButton.disabled = false;
    } 
    else{
        purchaseButton.disabled = true;
    }

    // disable and enable apply coupon button
    const applyButton = document.getElementById("apply-btn");
    if (totalPrice >= 200){
        applyButton.disabled = false;
    } 
    else{
        applyButton.disabled = true;
    }
}

// apply coupon and get discount
function applyCoupon(){
    const couponCode = document.getElementById("coupon-code").value;
    if (couponCode == "SELL200"){
        // calculate discount and total (after get discount)
        const discount = totalPrice * 0.2;
        const total = totalPrice - discount;

        // show discount and total (after get discount)
        setInnerText("discount", discount.toFixed(2));
        setInnerText("total", total.toFixed(2));
    } 
    else{
        setInnerText("total", totalPrice.toFixed(2));
    }
}

// reset home page
function handleClickHome(){
    // reset the selected items
    const selectedItems = document.getElementById("selected-items");
    selectedItems.innerText = '';

    // reset the total price, discount, and total
    totalPrice = 0;
    setInnerText("total-price", "00.00");
    setInnerText("discount", "00.00");
    setInnerText("total", "00.00");

    // disable purchase button
    const purchaseButton = document.getElementById("purchase-btn");
    purchaseButton.disabled = true;

    // reset the coupon code input field
    const couponCode = document.getElementById("coupon-code");
    couponCode.value = '';
    couponCode.placeholder = "Coupon code";

    // disable coupon button
    const applyButton = document.getElementById("apply-btn");
    applyButton.disabled = true;
}