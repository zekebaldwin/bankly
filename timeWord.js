const lowNames = ["zero", "one", "two", "three",
    "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen",
    "fifteen", "sixteen", "seventeen",
    "eighteen", "nineteen"];


const tensNames = ["twenty", "thirty", "forty", "fifty",
    "sixty", "seventy", "eighty", "ninety"];

function timeHour(num) {
    num = num.split(':')
    let hour = parseInt(num[0])
    if (hour > 12) {
        hour -= 12
        hour = lowNames[hour]
        return hour + " "
    }
    if (hour === 00) {
        hour = lowNames[12]
        return hour + " "
    }
    else {
        hour = lowNames[hour]
        return hour + " "
    }
}


function timeMin(num) {
    let result
    let amPm
    num = num.split(':')
    let hour = parseInt(num[0])
    if (hour >= 12) {
        amPm = " pm"
    }
    else {
        amPm = " am"
    }
    let minute = parseInt(num[1])
    if (minute < lowNames.length) {
        if (minute <= 9) {
            result = "oh " + lowNames[minute]
        }
    }
    else {
        tens = Math.floor(minute / 10);
        ones = minute % 10;
        if (tens <= 9) {
            result = tensNames[tens - 2];
            if (ones > 0) {
                result += " " + lowNames[ones];
            }
        } else {
            return result = undefined
        }
    }
    return result + amPm


}

function timeWord(time) {
    if (time == "00:00") {
        return "midnight"
    }
    if (time == "12:00") {
        return "noon"
    }
    return timeHour(time) + timeMin(time)
}