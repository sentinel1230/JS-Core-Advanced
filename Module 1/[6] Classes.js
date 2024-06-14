/**Создайте класс под названием «Человек» со
свойствами имени, возраста и страны.
Включите метод для отображения сведений о
человеке. Создайте два экземпляра класса
«Человек» и отобразите их сведения. */

class human {
    constructor(name, age, country){
        this.name = name
        this.age = age
        this.country = country
    }

    checkInformation()
    {
        return `Меня зовут ${this.name} мне ${this.age} я живу в ${this.country} `
    }
}

const firstHuman = new human('Jhon', '25', 'USA')
const secondHuman = new human('Alex', '28', 'Poland')

console.log(firstHuman.checkInformation())
console.log(secondHuman.checkInformation())