//Base
const pricePen = 15.678;
const priceBook = 123.965; 
const priceToy = 90.2345;
const SumForPay = 500;
const minDiscount = 5;
const maxDiscount = 95;
let maxPrice = Math.max(pricePen, priceBook, priceToy)
console.log(maxPrice);
let minPrice = Math.min(pricePen, priceBook, priceToy);
console.log(minPrice);
let totalPrice = pricePen + priceBook + priceToy;
console.log(totalPrice);
let integerSum = Math.trunc(pricePen) + Math.trunc(priceBook) + Math.trunc(priceToy);
let roundedSum = 100* Math.ceil(integerSum/100);
console.log(roundedSum);
let isEven  = integerSum%2 == 0;
console.log(isEven);
let restAfterPay = +((SumForPay - totalPrice).toFixed(2));
console.log(restAfterPay);
let averagePrice = +((totalPrice/3).toFixed(2));
console.log(averagePrice);
let discount = Math.floor(Math.random() * (maxDiscount - minDiscount +1)) + minDiscount;
console.log(`${discount}%`);
let discountPrice = +((totalPrice - totalPrice*discount/100).toFixed(2));
console.log(discountPrice);
let cost = Math.trunc(totalPrice)/2;
let profit = cost - Math.trunc(totalPrice*discount/100);
console.log(profit);

//Advanced 
console.log(`
максимальна ціна: ${maxPrice}
мінімальна ціна: ${minPrice} 
вартість всіх товарів: ${totalPrice}
сума округлених (в меншу сторону) цін: ${integerSum} 
сума товарів округлена до сотень: ${roundedSum}
сума всіх товарів (округлена в меншу сторону) є парним числом: ${isEven}
решта від 500грн становить: ${restAfterPay}
середня ціна: ${averagePrice}
знижка: ${discount}%
при знижці ${discount}% сума до оплати: ${discountPrice}
чистий прибуток: ${profit}`);
