export function getPrice(priceList) {
    function calculateTax(tax) {
        const sumPriceWithTax = (previousValue, currentValue) => previousValue + currentValue;
        return priceList.map((price) => price + (price * tax)).reduce(sumPriceWithTax)
    }
    return calculateTax
}
