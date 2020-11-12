const range = function(start, end) {
    if (start === end) {
        return [];
    }

    let nextLevel = range(start+1, end);
    nextLevel.unshift(start);
    return nextLevel;
}

// console.log(range(1,5));

function sumRec(arr) {
    if (arr.length === 0) {
        return 0;
    }
    // let head = arr[0];
    return arr.pop() + sumRec(arr);
}

// console.log(sumRec([1,2,3,4,5]))

// function exp(b, n) {
//     if (n === 0) {
//         return 1;
//     }
//     return b * exp(b, n-1);
// }

function exp(b, n) {
    if (n === 0) {
        return 1;
    }
    if (n % 2 === 0) {
        return exp(b, n / 2) ** 2;
    } else {
        return exp(b, (n - 1) / 2) ** 2 * b;
    }
}

// console.log(exp(2, 0));
// console.log(exp(2, 10));

function fibonacci (n) {
    if (n === 1){
        return [1];
    } else if ( n === 2 ){
        return [1,1];
    }

    let nextLevel = fibonacci(n - 1);
    nextLevel.push(nextLevel[nextLevel.length - 1] + nextLevel[nextLevel.length - 2]);
    return nextLevel;
}

// console.log(fibonacci(4));
// console.log(fibonacci(7));

function deepDup(arr) {
    let newArr = [];
    arr.forEach(element => {
        if (Array.isArray(element)) {
            newArr.push(deepDup(element));
        } else {
            newArr.push(element);
        }
    });
    return newArr;
}

// console.log(deepDup([1,2,[3,4]]));

function bsearch(arr, target) {
    if (arr.length === 0) {
        return -1 
    }
    
    let mid = Math.floor(arr.length / 2);
    
    if (target < arr[mid]) {
        return bsearch(arr.slice(0, mid), target);
    } else if (target > arr[mid]) {
        let nextLevel = bsearch(arr.slice(mid+1), target);
        return nextLevel === -1 ? -1 : nextLevel + mid + 1;
    } else {
        return mid;
    }
}

// console.log(bsearch([1,2,3,4,5], 4))

function helper(left, right) {
    let result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left).concat(right);
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return helper(left, right);
}

// console.log(mergeSort([5,2,7,6,4,8,4]));



function subsets(arr) {
    if (arr.length < 2) {
        return [arr];
    }
    
    let nextLevel = subsets(arr.slice(1))
    arr.forEach(element => {
        nextLevel.push(arr.slice(0,arr.indexOf(element)+1));
    });
    return nextLevel;
}


// console.log(subsets([1,2,3,4,5]));