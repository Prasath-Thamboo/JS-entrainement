const films = ["Lilo", "Matrix", "Evil Dead"]
const age = prompt ("Quel est votre age ")

if (!isNaN(age)) {
    age = Number(age); 
    if (age >= 18) {
        console.log("Regarde Evil et tout ce que tu veux")
    } 
    
    else if (age < 18 && age >= 12){
        console.log("Regarde Matrix ou lilo")
    } 
    
    else {
        console.log("Regarde QUE Lilo")
    }
} else {
    console.log("Zingo")
}