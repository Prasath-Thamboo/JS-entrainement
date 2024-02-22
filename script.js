function canDrive(age, pays){
if (age < 18 && pays === "FR" || age < 16 && pays === "US"){
    return false
}{
    return true
}    
}
console.log(canDrive(15, "US"))