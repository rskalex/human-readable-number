const num = {
    0: 'zero',
    1: 'one', 
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty'
}
const dec = {
    0: 'ten',
    1: 'twenty',
    2: 'thirty',
    3: 'forty',
    4: 'fifty',
    5: 'sixty',
    6: 'seventy',
    7: 'eighty',
    8: 'ninety'
}

function less100(number) {
    if(number <= 20) {
        return num[number]
    } else {
        if(number % 10 === 0) {
           return dec[Math.floor(number / 10) - 1]
        } else {
           return dec[Math.floor(number / 10) - 1] + ' ' + num[number % 10]
        }
    }
}

module.exports = function toReadable (number) {
    if(number < 100) {
       return less100(number)
    } else {
        if(number % 100 === 0){
            return num[Math.floor(number / 100)] + ' hundred' + '';
        } else {
            return num[Math.floor(number / 100)] + ' hundred' + ' ' + less100(number % 100)
        }
    }
}
