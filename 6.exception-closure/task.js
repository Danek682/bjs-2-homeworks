// Задача 1. Форматтер чисел
function parseCount(value) {
    let number = Number.parseFloat(value)
    if (isNaN(number)) {
      throw new Error("Невалидное значение")
    }
    return number
  }
  
  function validateCount(value) {
    try {
      let number = parseCount(value)
      return number
    } catch (error) {
      return error
    }
  }

  // Задача 2. Треугольник
class Triangle {
    constructor(firstSide, secondSide, thirdSide) {
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
        
        if (this.firstSide + this.secondSide <= this.thirdSide ||
            this.secondSide + this.thirdSide <= this.firstSide ||
            this.firstSide + this.thirdSide <= this.secondSide) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        return this.firstSide + this.secondSide + this.thirdSide;
    }

    get area() {
        const s = (this.firstSide + this.secondSide + this.thirdSide) / 2;
        return Math.sqrt(s * (s - this.firstSide) * (s - this.secondSide) * (s - this.thirdSide)).toFixed(3);
    }
}

function getTriangle(firstSide, secondSide, thirdSide) {
    try {
        return new Triangle(firstSide, secondSide, thirdSide);
    } catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}
// Примеры создания треугольников
const triangle1 = getTriangle(3, 4, 5);
console.log("Площадь первого треугольника: " + triangle1.area);
console.log("Периметр первого треугольника: " + triangle1.perimeter);

const triangle2 = getTriangle(10, 6, 8);
console.log("Площадь второго треугольника: " + triangle2.area);
console.log("Периметр второго треугольника: " + triangle2.perimeter);

const triangle3 = getTriangle(1, 2, 3);
console.log("Площадь третьего треугольника: " + triangle3.area);
console.log("Периметр третьего треугольника: " + triangle3.perimeter);