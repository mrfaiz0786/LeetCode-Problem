/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let  min = prices[0];
    let  max = 0;
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        let Profit = prices[i] - min
        max = Math.max(Profit, max)
    }
    return max;
};