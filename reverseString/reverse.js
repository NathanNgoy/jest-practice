const reverse = (string) => {
    if (typeof string === 'string') {
        return string.split("").reverse().join("")
    } else {
        return 'Please input a string'
    }
}

module.exports = reverse