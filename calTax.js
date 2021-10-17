import { getPrice } from './getPrice.js'
let priceList = prompt(`Enter your price list with format\n Ex. 10 20 30 40 50`)
let getPriceList = (priceList.split(' ')).map(i => Number(i))
console.log(getPriceList);
let calTotalPriceWithTax = getPrice(getPriceList)
let tax = 0.07
console.log(`Tax : ${(tax*100).toFixed(0)}%\nTotal Price : ${calTotalPriceWithTax(tax)}`)