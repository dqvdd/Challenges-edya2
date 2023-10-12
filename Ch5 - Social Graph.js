class Node {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  class Graph {
    constructor() {
      this.nodes = [];
      this.edges = [];
    }
  
    addPerson(name, age) {
      const personNode = new Node(name, age);
      this.nodes.push(personNode);
      return personNode;
    }
  
    addCity(name) {
      const cityNode = new Node(name);
      this.nodes.push(cityNode);
      return cityNode;
    }
  
    addEdge(person, city) {
      if (this.nodes.includes(person) && this.nodes.includes(city)) {
        this.edges.push({ person, city });
      } else {
        console.log("Persona o ciudad no encontrada.");
      }
    }
  
    getPeopleInCity(city) {
      return this.edges
        .filter(edge => edge.city === city)
        .map(edge => edge.person);
    }
  }
  
  // Crear un grafo de amigos y ciudades
  const socialNetwork = new Graph();
  
  // Agregar ciudades colombianas como nodos
  const bogota = socialNetwork.addCity("Bogotá");
  const medellin = socialNetwork.addCity("Medellín");
  const cali = socialNetwork.addCity("Cali");
  
  // Agregar personas colombianas como nodos
  const camila = socialNetwork.addPerson("Camila", 26);
  const santiago = socialNetwork.addPerson("Santiago", 28);
  const valentina = socialNetwork.addPerson("Valentina", 24);
  const mateo = socialNetwork.addPerson("Mateo", 30);
  
  // Establecer conexiones entre nodos (qué persona vive en qué ciudad)
  socialNetwork.addEdge(camila, bogota);
  socialNetwork.addEdge(santiago, medellin);
  socialNetwork.addEdge(valentina, bogota);
  socialNetwork.addEdge(mateo, cali);
  
  // Imprimir las personas que viven en una ciudad específica
  const cityToFind = medellin;
  const peopleInCity = socialNetwork.getPeopleInCity(cityToFind);
  
  if (peopleInCity.length > 0) {
    console.log(`Personas que viven en ${cityToFind.name}:`);
    peopleInCity.forEach(person => {
      console.log(`Nombre: ${person.name}, Edad: ${person.age}`);
    });
  } else {
    console.log(`No hay personas en ${cityToFind.name}.`);
  }
  