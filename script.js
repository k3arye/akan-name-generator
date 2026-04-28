document.getElementById("akan-form").addEventListener("submit", (event)=> {
event.preventDefault();

let birthday = document.getElementById("birthday").value;

let genderInput = document.querySelector('input[name="gender"]:checked');

if (!birthday){
    document.getElementById("akan-name").innerText = "Please enter your birthday!";
    return;
}
if (!genderInput){
    document.getElementById("akan-name").innerText = "Please select your gender!";
    return;
}

let gender = genderInput.value;

let date = new Date(birthday);

let DD = date.getDate();
let MM = date.getMonth() + 1;
let YYYY = date.getFullYear();

if (MM === 1 || MM === 2) {
  MM += 12;
  YYYY -= 1;
}

let CC = Math.floor(YYYY / 100);
let YY = YYYY % 100;

let d =
  (Math.floor(CC / 4) -
    2 * CC -
    1 +
    Math.floor((5 * YY) / 4) +
    Math.floor((26 * (MM + 1)) / 10) +
    DD) %
  7;
d = ((d % 7) + 7) % 7;

let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

let akanName;
if (gender === "male"){
    akanName = maleNames[d]
} else{
    akanName = femaleNames[d]
}

document.getElementById("akan-name").innerText = akanName;
});
    