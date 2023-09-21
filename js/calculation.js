function cardClick(title, price){
    const productTitle = document.getElementById(title);
    const productName = productTitle.innerText;

    const productNames = document.getElementById('product-names');
    const p = document.createElement('p');
    const count = productNames.childElementCount;
    p.innerText =`${count + 1} . ${productName}`;
    productNames.appendChild(p);

    const productPrice = document.getElementById(price);
    const productPriceText = productPrice.innerText;
    const prices = parseFloat(productPriceText);
    //console.log(productName, prices);

    const totalPriceValue = document.getElementById('total-price');
    const totalPriceValueText = totalPriceValue.innerText;
    const totalPrice = parseFloat(totalPriceValueText);

    const totalDiscountValue = document.getElementById('discount');
    const totalDiscountValueText = totalDiscountValue.innerText;
    const DiscountPrice = parseFloat(totalDiscountValueText);

    const totalPayValue = document.getElementById('total-pay');
    const totalPayValueText = totalPayValue.innerText;
    const totalPay = parseFloat(totalPayValueText);

    const totalPrices = totalPrice + prices;
    totalPriceValue.innerText = totalPrices;


    const totalPays = totalPrices;
    totalPayValue.innerText = totalPays;

    if(totalPrices > 0){
        var makePurchase = document.getElementById('make-purchase');
        makePurchase.disabled = false;
    }

    if(totalPrices >= 200){
        var applyBtn = document.getElementById('apply-btn');
        applyBtn.disabled = false;  
    }
}

function couponBtn(){
    var couponInput = document.getElementById("input-coupon");

    const priceTotal = document.getElementById('total-price').innerText;
    const discountTotal = document.getElementById('discount').innerText;
    const totalPays = document.getElementById('total-pay').innerText;

    var enteredCoupon = couponInput.value;
    var validCoupon = "SELL200";
    if (enteredCoupon === validCoupon){
        const discountTotal = (priceTotal * 20) / 100;
        document.getElementById('discount').innerText = discountTotal;

        const totalPays = priceTotal - discountTotal;
        document.getElementById('total-pay').innerText = totalPays;
    }
  
}


function purchaseBtn(){
    

}

function firstCard(){
    cardClick('title', 'price');
}
function secondCard(){
    cardClick('title2', 'price2');
}
function thirdCard(){
    cardClick('title3', 'price3');
}
function fourthCard(){
    cardClick('title4', 'price4');
}
function fifthCard(){
    cardClick('title5', 'price5');
}
function sixthCard(){
    cardClick('title6', 'price6');
}

