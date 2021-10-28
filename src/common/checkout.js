const computeTotal = (state) => {
    return state.products.reduce((total, arg) => total + (arg.price||0) * (arg.qty||0), 0);
}
const computeTax = (total, shipping, tax_rate, tax_shipping) => {
    return ((total + (tax_shipping?shipping:0)) * tax_rate).toFixed(2)
}
const getTaxRate = (state, zip, address1, address2) => {
    if(state === 'FL') {
        return {tax_rate: 0.07, tax_shipping:false};
    }
    return {tax_rate: 0, tax_shipping: false};
}
const computeShipping = (total) => {
    if(total < 5) return 2;
    if(total < 10) return 4.5;
    if(total < 20) return 9;
    if(total < 30) return 16;
    return 22;
}

export {computeShipping, computeTotal, computeTax, getTaxRate}
