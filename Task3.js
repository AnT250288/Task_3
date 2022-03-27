//Task 1
function sum(num) {
    if (num <= 0) return 0;
    if (num === 1) return (num) => num;

    let _arguments = [];

    function helper(...args) {
        _arguments = [..._arguments, ...args];
        if (_arguments.length >= num) {
            _arguments.length = num;
            return _arguments.reduce((acc, number) => acc + number)
        } else {
            return helper;
        }
    }
    return helper;
}


//Task 2
function sumOfDigits(n) {
    const Result = n.toString().split('').map(item => {
        return Number(item);
    }).reduce((a, b) => a + b);

    if (String(Result).length > 1) {
        return sumOfDigits(Result);
    } else {
        return Result;
    }
}

//Task 3
const sortOddNumbers = (array) => {
    const oddNumbers = array.filter((number) => number % 2).sort((a, b) => a - b);
    return array.map((number) => number % 2 ? oddNumbers.shift() : number);
}


//Task 4
function anagrams(word, words) {
    return words.filter(function (elem) {
        return elem.split('').sort().join('') === word.split('').sort().join('');
    })
}