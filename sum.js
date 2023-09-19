function sum(a,b) {
    return a+b
}
function capitalize(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
}
function reverseString(string) {
    let arrayString = string.split('')
    return arrayString.reverse().join('')
}
const calculator = {
    add: (a,b) => {
        return a+b
    },
    subtract: (a,b) => {
        return a-b
    },
    divide: (a,b) => {
        return a/b
    },
    multiply: (a,b) => {
        return a*b
    }
}
function caesarCipher(string, shiftFactor) {
    // a-z: 97-122; A-Z: 65-90
    let arrayString = string.split('')
    let encrypt = arrayString.map((char) => {
        let i = char.charCodeAt(0)
        if((i>96 && i<123) || (i>64 && i<91)) {
            let newI = i + shiftFactor
            if(i>96 && i<123 && newI>122) {
                newI = (newI%122)%25 + 96
            } else if (i>64 && i<91 && newI>90) {
                newI = (newI%90)%25 + 64
            }
            return String.fromCharCode(newI)
        }
        else {
            return char
        }
    })
    return encrypt.join('')
}
const analyzeArray = (array) => {
    function average() {
        const sum = array.reduce((sum, item) => sum+item)
        return +(sum/(array.length)).toFixed(2)
    }
    function min() {
        return Math.min(...array)
    }
    function max() {
        return Math.max(...array)
    }
    function length(){
        return array.length
    }
    return {average: average(), min: min(), max: max(), length: length()}
}
export { sum, capitalize, reverseString, calculator, caesarCipher, analyzeArray}