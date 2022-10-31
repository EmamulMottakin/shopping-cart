function productCounter (product, isIncrease){
    let productQuantity = document.getElementById(product +'-quantity');
    let productQuantityNumber = parseFloat(productQuantity.value);

    let numberOfProductQuantity = productQuantityNumber;
    if(isIncrease == true){
        numberOfProductQuantity = productQuantityNumber + 1;
    }
    if(isIncrease == false && productQuantityNumber > 0){
        numberOfProductQuantity = productQuantityNumber - 1;
    }
    productQuantity.value = numberOfProductQuantity;

    let productPrice = 0;
    if (product == "js") {
        productPrice = numberOfProductQuantity * 1000;
    }
    if( product == 'htmlCourse' ){
        productPrice = numberOfProductQuantity * 995;
    }
    document.getElementById ( product + '-price' ).innerText = productPrice;
    priceCalculator ();

}



function priceCalculator () {   

    const jsPriceNumber = valueToNumber('js');
    const htmlCoursePriceNumber = valueToNumber('htmlCourse');

    const gTotalPrice = jsPriceNumber + htmlCoursePriceNumber

    document.getElementById('sub-total-price').innerHTML = gTotalPrice;
    document.getElementById('grand-total-price').innerHTML = gTotalPrice;

    console.log(gTotalPrice);
}

function valueToNumber(product) {

    const value = document.getElementById ( product + '-price' );
    const valueToNumber = parseFloat(value.innerText);
    return valueToNumber;

}