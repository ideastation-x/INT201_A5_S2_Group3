
import { getPrice } from './getPrice.js'

let priceList = { 
    testCase1: [10, 20, 30, 40, 50], 
    testCase2: [50, 300, 80, 100, 460], 
    testCase3: [168, 1890, 1987, 1237, 1984]
}
let tax = 0.07

let calTotalPriceWithTax_case1 = getPrice(priceList.testCase1)
console.log(`Price List : ${priceList.testCase1}\nTax : ${(tax * 100).toFixed(0)}%\nTotal Price : ${calTotalPriceWithTax_case1(tax)}`)

let calTotalPriceWithTax_case2 = getPrice(priceList.testCase2)
console.log(`Price List : ${priceList.testCase2}\nTax : ${(tax * 100).toFixed(0)}%\nTotal Price : ${calTotalPriceWithTax_case2(tax)}`)

let calTotalPriceWithTax_case3 = getPrice(priceList.testCase3)
console.log(`Price List : ${priceList.testCase3}\nTax : ${(tax * 100).toFixed(0)}%\nTotal Price : ${calTotalPriceWithTax_case3(tax)}`)