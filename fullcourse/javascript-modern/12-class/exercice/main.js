/*
*Exercice
/créer une classe rectangle qui aura deux arguments: hauteur et largeur.
/créer un getter qui retourne l'aire de notre rectangle en appelant une méthode de notre classe calcArea qui fait le calcul de l'aire
/instancier la classe pour créer un carré de 10x10 et afficher son aire
*/

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  
    calcArea() {
      return this.height * this.width;
    }
  
    get area() {
      return this.calcArea();
    }
  }
  
  const rectangle = new Rectangle(10, 20);
  
  console.log("Aire du rectangle : " + rectangle.area);

  class Square extends Rectangle{
    constructor(side){
        super(side, side)
    }
  }
  
  const square = new Square(10);
  console.log("aire du carré : " + square.area);
  