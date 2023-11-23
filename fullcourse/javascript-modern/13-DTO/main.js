/*
*Data Transfer Object 
*/

class User{
    constructor(firstname, lastname, age, email, website, password){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.email = email;
        this.website = website;
        this.password = password;
    }
}


class Address{
    constructor(street, number, box, zip, city, country){
        this.street = street;
        this.number = number;
        this.box = box;
        this.zip = zip;
        this.city = city;
        this.country = country;
    }
}

class UserDTO{
    constructor(user, address) {
        this.name = user.firstname;
        this.age = user.age;
        this.adress = {
            street: address.street,
            city: address.city,
            country: address.country
        }
    }
}

const user = new User("John", "Doe", 18, "asterix@obelix.com", "github.io", 1234);
const address = new Address("rue haute", 12, 1, 72500, "Anywhere", "Somwhere");
const userDto = new UserDTO(user, address);

console.log(userDto);