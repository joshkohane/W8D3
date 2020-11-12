Array.prototype.bubbleSort = function() {
    let sorting = true;
    while (sorting) {
        sorting = false;
        for(let i = 0; i < this.length-1; i++) {
            if (this[i] > this[i+1]) {
                // let placeholder = this[i];
                // this[i] = this[i+1];
                // this[i+1] = placeholder;
                [this[i], this[i+1]] = [this[i+1], this[i]]
                sorting = true;
            }
        }
    }
    return this;
}

// console.log([5,4,3,2,1].bubbleSort());


const substring = function(str) {
    let result = [];
    for(let i = 0; i < str.length; i++) {
        for(let j = i + 1; j <= str.length; j++) {
            result.push(str.slice(i,j));
        }
    }

    return result;
}

console.log(substring('hello'))