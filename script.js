
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



// Akan Names
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

let akanName;
if (gender === "male"){
    akanName = maleNames[day]
} else{
    akanName = femaleNames[day]
}
})
    