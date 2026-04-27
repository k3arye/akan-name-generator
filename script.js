
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

})
    