const a = {
    firstname: "John", 
    lastname: "Doe", 
    fullname: function (){
        console.log(this)
    }
}

a.fullname()