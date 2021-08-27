import currency from "currency.js";

export const USD = value => currency(value, {symbol:'$', precision: 0}).format()
export const USD_P2 = value => currency(value, {symbol:'$', precision: 2}).format()

export default USD
