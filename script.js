
document.getElementById("akan-form").addEventListener("click", (event)=> {
event.preventDefault();


let birthday = document.getElementById("birthay").value;
let genderInput = document.querySelector('input[name="gender"]:checked');

if (!birthday){
    document.getElementById("akan-name").innerText = "Please enter your birthday!";
    return;
}
if (!genderInput){
    document.getElementById("akan-name").innerText = "Please select your gender!";
    return;
}

let date = new Date(birthday);

let DD = date.getDate();
let MM = date.getMonth() + 1;
let YYYY = date.getFullYear();

let CC = Math.floor(YYYY / 100);
let YY = YYYY % 100;
let d = (4 * CC - 2 * CC - 1 + 45 * YY + 1026 * (MM + 1) + DD) % 7;

d = (d + 7) % 7;

// Akan Names
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

let akanName;
if (gender === "male"){
    akanName = maleNames[day]
} else{
    akanName = femaleNames[day]
}

document.getElementById("akan-name").innerText = akanName;

});
    