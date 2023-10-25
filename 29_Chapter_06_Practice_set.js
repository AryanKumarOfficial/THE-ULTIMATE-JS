// Q1. solution
/*
let age = prompt("Enter your age");
age = Number.parseInt(age);

if (age >= 19) {
    alert("You can drive");
}
else {
    alert("You can't drive");
}

// Q2. solution
/*
let again = confirm("Do you want to see the prompt again?")

while (again) {
    let age = prompt("Enter your age");
    age = Number.parseInt(age);

    if (age >= 19) {
        alert("You can drive");
    }
    // Q3. solution
/*
if (age < 0) {
    console.error("Age is not valid");
}

else {
    alert("You can't drive");
}

again = confirm("Do you want to see the prompt again?")
}
*/

// Q4. solution
/*
let num = prompt("Enter a number");
num = Number.parseInt(num);

const check = (num) => {
    return num > 4 ? true : false;
}

if (check(num)) {
    location.assign("https://www.codewithharry.com");
}
*/

const launch = document.querySelector("#btn")
launch.addEventListener("click", () => {
    // Q5. solution
    let color = prompt("Enter background color of the page (red, green, blue, yellow, pink, black, white, grey)");

    const changeColor = (color) => {
        document.body.style.backgroundColor = color;
    }

    changeColor(color);
})

