"use strict";

// 1) Funktion(er)
function checkPassword(password) {

    if (password.length > 12) {
        return console.log("Strong password");
    } else if (password.length > 8 && password.length <= 12) {
        return console.log("Medium password");
    } else {
        return console.log("Weak password");
    }
}

// 2) Kode der kører programmet
const password = prompt("Enter password");       // input fra bruger
const passwordCheck = checkPassword(password);
console.log(passwordCheck);

const date = prompt("Enter date (MM/DD/YYYY):");

const convertDate = dateConvertion(date);
console.log(convertDate);

function dateConvertion(date) {
    let MONTH = date.substring(0,2);
    let DAY = date.substring(3,5);
    let YEAR = date.substring(6,10);

    let newDate = (DAY + "-" + MONTH + "-" + YEAR);

    return newDate;
}

const message = prompt("Enter a message to log");
const timesOfLogs = Number(prompt("How many times do you wish to log the message?"));

multipleLogs(message, timesOfLogs);

function multipleLogs(message, timesOfLogs) {
    for (let i = 0; i < timesOfLogs; i++) {
        console.log(message);
    }


    //email-list
   
   const emailsFromPeter =
     "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com";

   const emailArray = emailsFromPeter.split("|");

   for (let i = 0; i < emailArray.length; i++) {
     sendEmailTo(emailArray[i]);
   }

function sendEmailTo(recipient) {
       
     }


    // In the following example number 1 & 6 should be accepted

    const strings = [
        "121256-7890",
        "987654-3210",
        "1004890123",
        "112233-44552",
        "111244-556611",
        "150690-3131",
        "150690-3152asd",
    ];

    "use strict";

    getCorrectCPR(strings);

    function getCorrectCPR(strings) {
        const validCPR = [];

        for (let i = 0; i < strings.length; i++) {
            const s = strings[i];

            // 1) basic format check: 6 digits, dash, 4 digits
            if (/^\d{6}-\d{4}$/.test(s)) {
                validCPR.push(s);
            }
        }

        console.log(validCPR);
        return validCPR;
    }


    const student = {
        name: "Rasmus",
        grades: {
            math: 10,
            english: 7,
            science: 12,
        },
        getAverageGrade() {
            const sum =
                this.grades.math +
                this.grades.english +
                this.grades.science;

            return sum / 3;
        },
    };

// Print math grade
    console.log(student.grades.math);

// Call method and print average
    console.log(student.getAverageGrade());








}