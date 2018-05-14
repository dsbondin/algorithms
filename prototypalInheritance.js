function Rectangle(width, height) {
 this.width = width;
 this.height = height;
}

Rectangle.prototype.area = function() {
 return this.width * this.height;
}

let rect = new Rectangle(4, 5);
rect.area();
// 20

function Square(size) {
 this.width = this.height = size;
}

Square.prototype = Object.create(Rectangle.prototype);

var square = new Square(6);
square.area();
// 36
