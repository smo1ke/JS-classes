"use strict";

// 1) Переписать функцию-конструктор MyArray на классы.
// * Переписать методы unshift и/или push для неограниченного числа аргументов.
// function LuxoreCars(color, model, brand, price, year) {
//   this.color = color;
//   this.model = model;
//   this.brand = brand;
//   this.price = price;
//   this.year = year;
// }

// const newCar = new LuxoreCars("Red", "X7", "BMW", "70000$", 2021);
// console.log(newCar);

class LuxoreCars {
  constructor(color, model, price, year) {
    this.color = color;
    this.model = model;
    this.price = price;
    this.brand = [];
    this.year = year;
  }
  addBrands(brand) {
    this.brand.push(...brand);
  }
}

const newCar = new LuxoreCars("Black", "BMW", "70000$", 2021);
newCar.addBrands(["Mersedes", "Lexus", "Porshe", "AstonMartin"]);
console.log(newCar);

// 2) Реализовать класс RangeValidator, со следующими свойствами:
// ■ from (типа number);
// ■ to (типа number);
// (from <= to)
// Реализовать getter'ы и setter'ы для обоих свойств
// *Реализовать getter range, который будет возвращать массив с двумя числами диапазона (т.е. геттер возвращает не свойство, а массив с двумя элементами, которые являются свойствами)
// Реализовать метод validate, который будет принимать число и проверять, входит ли число в указанный диапазон.

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  validate(numberInRange) {
    if (numberInRange >= this.from && numberInRange <= this.to) {
      console.log("Number in correct range!");
    } else {
      throw new RangeError(
        "Value must be in range from" +
          " " +
          `${this.from}` +
          " to " +
          `${this.to}`
      );
    }
  }

  set from(value1) {
    if (typeof value1 !== "number") {
      throw new TypeError("Value must be a number!");
    }
    if (value1 < 1 || Number.isNaN(value1) || value1 > this.to) {
      throw new RangeError(
        "Value must be > 0 or less than last number of range!"
      );
    }

    this._from = value1;
  }

  get from() {
    return this._from;
  }
  set to(value2) {
    if (typeof value2 !== "number") {
      throw new TypeError("Value must be a number!");
    }
    if (value2 > 100 || Number.isNaN(value2) || value2 < this.from) {
      throw new RangeError(
        "Value must be less than 100 or  biger then first number of range"
      );
    }

    this._to = value2;
  }
  get to() {
    return this._to;
  }
}

try {
  const range = new RangeValidator(1, 100);
  console.log(range);
  console.log(range.validate(50));
  const range1 = new RangeValidator(1, 5.5);
  range1.from = 5;
  range1.to = 80;
  console.log(range1._from);
  console.log(range1.to);
  console.log(range1.validate(10));
  console.log(range1.validate(100));
} catch (err) {
  console.log("err :>> ", err);
}

// Примеры работы:
// const range1 = new RangeValidator(1, 5.5) // Отрабатывает
// const range1 = new RangeValidator(10, 5.5) // ОШИБКА!!!

// // Работа сеттеров
// range1.from = 5; // Отрабатывает
// range1.from = 200; // ОШИБКА!!!

// range1.to = 80; // Отрабатывает
// range1.to = -55; // ОШИБКА!!!

// // Работа геттеров
// console.log(range1.from) // => 5
// console.log(range1.to) // => 80

// // Работа геттера range
// console.log(range1.range) // => [5, 80]

// // Работа validate
// console.log(range1.validate(10)) // => true

// console.log(range1.validate(100)) // => false
