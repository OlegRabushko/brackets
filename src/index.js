module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let brackets = {};

    if (str.length % 2 !== 0) return false;

    bracketsConfig.flat().map((item, index, array) => {
        if (index % 2 !== 0) {
            brackets[array[index - 1]] = item;
        }
    });

    for (let char of str) {
        for (let key in brackets) {
            if (char === key && !stack.includes(brackets[key])) {
                stack.push(char);
            } else if (
                char === brackets[key] &&
                stack[stack.length - 1] === key
            ) {
                stack.pop();
            }
        }
    }

    return stack.length === 0;
};
