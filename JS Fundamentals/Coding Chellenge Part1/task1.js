// Mark
let wightsMark = 78
let heightMark = 1.69

let bmiMark = wightsMark / heightMark ** 2;

// John
let wightsJohn = 92 
let heightJohn = 1.95

let bmiJohn = wightsJohn / (heightJohn * heightJohn);

console.log(bmiJohn, bmiMark);

let markHigherBMI 
markHigherBMI = bmiMark >= bmiJohn

console.log(markHigherBMI);


if(bmiMark >= bmiJohn) {
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is Higher than Mark's!")
};


