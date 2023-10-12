class Queue {
    constructor() {
        this.queue = [];
    }

    // Agrega un elemento al final de la cola.
    enqueue(element) {
        this.queue.push(element);
        return this.queue;
    }

    // Elimina y devuelve el elemento en el frente de la cola.
    dequeue() {
        return this.queue.shift();
    }

    // Obtiene el elemento en el frente de la cola sin eliminarlo.
    peek() {
        return this.queue[0];
    }

    // Obtiene el número de elementos en la cola.
    size() {
        return this.queue.length;
    }

    // Verifica si la cola está vacía.
    isEmpty() {
        return this.queue.length === 0;
    }

    // Devuelve una copia de la cola en forma de matriz.
    print() {
        return this.queue;
    }
}

const ATM = new Queue();
const persona1 = {
    "nombre": "Carla",
    "hora": "12:30 AM"
};

const persona2 = {
    "nombre": "Mario",
    "hora": "2:15 PM"
};

const persona3 = {
    'nombre': 'Juan',
    'hora': '4:20 PM'
};

// Agrega las personas a la cola del ATM.
ATM.enqueue(persona1);
ATM.enqueue(persona2);
ATM.enqueue(persona3);

console.log("Cola del ATM:", ATM.print()); // Muestra la cola de personas
console.log("Tamaño de la cola:", ATM.size()); // Muestra el tamaño de la cola
console.log("Próxima persona en la cola:", ATM.peek()); // Muestra la próxima persona en la cola
