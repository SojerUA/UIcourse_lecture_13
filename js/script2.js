

function add (x) {
    return function (y) {
        let result = x + y;
        return result;
    };
}

alert(add(3)(4)); //sum of two functions
