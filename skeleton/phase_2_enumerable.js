Array.prototype.myEach = function(callback) {
    let i = 0;
    while (i < this.length) {
        callback(this[i]);
        i++;
    }
}

// console.log([1,2,3,4].myEach(function(ele){console.log(ele * 400)}));

Array.prototype.myMap = function(callback) {
    // let i = 0;
    // while (i < this.length) {
    //     this[i] = callback(this[i]);
    //     i++;
    // }
    // return this
    let result = [];
    this.myEach(ele => result.push(callback(ele)));
    return result;
}

// console.log([1,2,3,4].myMaps(function(ele){return ele * 400}));

Array.prototype.myReduce = function(callback, init) {
    let arr = this;
    if (init === undefined) {
        init = arr[0];
        arr = arr.slice(1);
    }
    arr.myEach(ele => init = callback(init, ele));
    return init;
}

// console.log([1, 2, 3].myReduce(function (acc, el) {
//     return acc + el;
// }));

// console.log([1, 2, 3].myReduce(function (acc, el) {
//     return acc + el;
// }, 25));