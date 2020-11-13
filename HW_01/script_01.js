//Base
const pricePen = 15.678;
const priceBook = 123.965; 
const priceToy = 90.2345;
const SumForPay = 500;
const minDiscount = 5;
const maxDiscount = 95;
const maxPrice = Math.max(pricePen, priceBook, priceToy)
console.log(maxPrice);
const minPrice = Math.min(pricePen, priceBook, priceToy);
console.log(minPrice);
const totalPrice = pricePen + priceBook + priceToy;
console.log(totalPrice);
const integerSum = Math.floor(pricePen) + Math.floor(priceBook) + Math.floor(priceToy);
const roundedSum = 100* Math.ceil(integerSum/100);
console.log(roundedSum);
const isEven  = integerSum%2 === 0;
console.log(isEven);
const restAfterPay = +((SumForPay - totalPrice).toFixed(2));
console.log(restAfterPay);
const averagePrice = +((totalPrice/3).toFixed(2));
console.log(averagePrice);
const discount = Math.floor(Math.random() * (maxDiscount - minDiscount +1)) + minDiscount;
console.log(`${discount}%`);
const discountPrice = +((totalPrice - totalPrice*discount/100).toFixed(2));
console.log(discountPrice);
const cost = Math.trunc(totalPrice)/2;
const profit = cost - Math.trunc(totalPrice*discount/100);
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
