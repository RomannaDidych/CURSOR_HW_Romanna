//Base
const priceThing1 = 15.678;
const priceThing2 = 123.965; 
const priceThing3 = 90.2345;
console.log(Math.max(priceThing1, priceThing2, priceThing3));
console.log(Math.min(priceThing1, priceThing2, priceThing3));
const totalPrice = priceThing1 + priceThing2 + priceThing3;
console.log(totalPrice);
let integerSum = Math.trunc(priceThing1) + Math.trunc(priceThing2) + Math.trunc(priceThing3);
let roundedSum = 100* Math.round(integerSum/100);
console.log(roundedSum);
console.log(` чи є сума всіх товарів (округлена в меншу сторону) парним числом?  ${integerSum/2 == Math.trunc(integerSum/2)}`);
console.log(`решта від 500грн становить: ${500 - totalPrice}`);
console.log(`середня ціна: ${Math.round((totalPrice/3)*100)/100}`);
let discount = Math.floor(Math.random() * 100);
console.log(`знижка: ${discount}%`);
let discountPrice = Math.round((totalPrice - totalPrice*discount/100)*100)/100;
console.log(`при знижці ${discount}% сума до оплати: ${discountPrice}грн`);
let cost = Math.trunc(totalPrice)/2;
let profit = cost - Math.trunc(totalPrice*discount/100);
console.log(profit);

//Advanced
console.log(`максимальна ціна: ${Math.max(priceThing1, priceThing2, priceThing3)}грн
	мінімальна ціна: ${Math.min(priceThing1, priceThing2, priceThing3)}грн 
	вартість всіх товарів: ${totalPrice}грн
	сума округлених (в меншу сторону) цін: ${integerSum} 
	сума товарів округлена до сотень: ${roundedSum}
	сума всіх товарів (округлена в меншу сторону) є парним числом: ${integerSum/2 == Math.trunc(integerSum/2)}
	решта від 500грн становить: ${500 - totalPrice}грн
	середня ціна: ${Math.round((totalPrice/3)*100)/100}грн
	знижка: ${discount}%
	при знижці ${discount}% сума до оплати: ${discountPrice}грн 
	чистий прибуток: ${profit}грн`);
