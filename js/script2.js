

function add (x) {
    return function (y) {
        return x + y;
    };
}

alert(add(3)(4)); //sum of two functions
