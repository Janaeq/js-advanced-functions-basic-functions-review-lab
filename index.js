// Your code here

// Function Declaration
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

// Function Expression
const mondayWork = function(task = 'go to the office') {
    return `This Monday, I will ${task}.`
}

// Closures
function wrapAdjective(visualFlair = "*") {
    return function(adjective = "special") {
        return `You are ${visualFlair}${adjective}${visualFlair}!`
    }
}

const Calculator = {
    add: function (a, b) {
        return a + b
    },
    subtract: function (a, b) {
        return a - b
    },
    multiply: function (a, b) {
        return a * b
    },
    divide: function (a, b) {
        return a / b
    }
}

function actionApplyer(int, arr) {
    if (arr === []) {
        return int
    } else {
        return arr.reduce(function (i, f) {
            return f(i)
        }, int)
    }
}