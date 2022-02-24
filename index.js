//index.js


// var number = 5
// let name = "Shawn";

// number= 12;
// name = "Pluralsight "

// document.writeln(name + number) ;
//alert("Hello World");

let hasJob = false;
if (hasJob) {
//I have a job
document.writeln("Thanks for visiting, I'm currently employed");
} else {
// I need a job
document.writeln("Please look around, I'm currently looking for a position.");
}

let today = new Date();
let dayOfWeek = today.getDay();
if (dayOfWeek ===0 || dayOfWeek === 6) {
    document.writeln("Since it is the weekend, please be patient with my reutrning your email.");
}

function showMessage(message) {
    document.writeln("<p>" + message + "</p");
    document.writeln("hr/>");

}
alert("Hello World");
