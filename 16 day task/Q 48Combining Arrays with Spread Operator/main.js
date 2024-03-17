var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var price1 = [1200, 800, 1300, 6999];
var price2 = [400, 300, 600, 650];
//combine prices and in ascending orders
var combinedLaptops = __spreadArray(__spreadArray([], price1, true), price2, true).sort(function (a, b) { return a - b; });
//loggin combinelaptops
console.log(combinedLaptops);
