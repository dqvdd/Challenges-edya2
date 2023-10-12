class Libro {
    constructor(nombre, isbn, autor, editorial) {
      this.nombre = nombre;
      this.isbn = isbn;
      this.autor = autor;
      this.editorial = editorial;
    }
  }
  
  class PilaDeLibros {
    constructor() {
      this.items = [];
    }
  
    push(libro) {
      this.items.push(libro);
    }
  
    pop() {
      if (this.items.length === 0) {
        return "La pila de libros está vacía";
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.items.length === 0) {
        return "La pila de libros está vacía";
      }
      return this.items[this.items.length - 1];
    }
  
    size() {
      return this.items.length;
    }
  
    print() {
      console.log(this.items);
    }
  }
  
  // Ejemplo de uso
  const miPilaDeLibros = new PilaDeLibros();
  
  const libro1 = new Libro("El Señor de los Anillos", "978-84-7724-636-2", "J.R.R. Tolkien", "Minotauro");
  const libro2 = new Libro("Cien años de soledad", "978-84-3760-253-3", "Gabriel García Márquez", "Cien años de soledad");
  const libro3 = new Libro("Harry Potter y la piedra filosofal", "978-84-9838-297-4", "J.K. Rowling", "Salamandra");
  
  miPilaDeLibros.push(libro1);
  miPilaDeLibros.push(libro2);
  miPilaDeLibros.push(libro3);
  
  miPilaDeLibros.print(); // Muestra la pila de libros
  
  console.log("Tamaño de la pila de libros:", miPilaDeLibros.size());
  console.log("Elemento superior:", miPilaDeLibros.peek());
  
  miPilaDeLibros.pop();
  miPilaDeLibros.print(); // Muestra la pila después de sacar un libro
  