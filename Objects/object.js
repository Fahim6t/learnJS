let Person = {
    id:101,
    name:"Fahim",
    designation:"Developer",
    single:true,
    address:{
        city:"Chennai",
        pincode:604205,
        state:"TamilNadu"
    },
    details: function(){
        return `ID: ${this.id} Name:${this.name} Designation: ${this.designation} Single:${this.single} City:${this.address.city} State:${this.address.state}`;
    }
}
console.log(`ID: ${Person.id} Name:${Person.name} Designation: ${Person.designation} Single:${Person.single} City:${Person.address.city} State:${Person.address.state}`);
console.log(Person.details());

