class TreeNode {
    constructor(name, birthdate) {
      this.name = name;
      this.birthdate = birthdate;
      this.children = [];
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insertChild(parent, name, birthdate) {
      const child = new TreeNode(name, birthdate);
      parent.children.push(child);
    }
  
    preOrder(node = this.root) {
      if (!node) {
        return;
      }
  
      console.log(`Nombre: ${node.name}, Fecha de Cumpleaños: ${node.birthdate}`);
      node.children.forEach(child => this.preOrder(child));
    }
  
    postOrder(node = this.root) {
      if (!node) {
        return;
      }
  
      node.children.forEach(child => this.postOrder(child));
      console.log(`Nombre: ${node.name}, Fecha de Cumpleaños: ${node.birthdate}`);
    }
  
    inOrder(node = this.root) {
      if (!node) {
        return;
      }
  
      if (node.children.length > 0) {
        this.inOrder(node.children[0]);
      }
  
      console.log(`Nombre: ${node.name}, Fecha de Cumpleaños: ${node.birthdate}`);
  
      for (let i = 1; i < node.children.length; i++) {
        this.inOrder(node.children[i]);
      }
    }
  }
  const familyTree = new BinaryTree();

  familyTree.root = new TreeNode("Bisabuelo Manuel Gonzalez", "01/01/1920");
  
  // Generación de hijos
  familyTree.insertChild(familyTree.root, "Carlos Gonzalez", "01/01/1945");
  familyTree.insertChild(familyTree.root, "Luisa Gonzales", "05/03/1947");
  
  // Generación de nietos para Carlos
  familyTree.insertChild(familyTree.root.children[0], "Maria González", "01/01/1965");
  familyTree.insertChild(familyTree.root.children[0], "Pedro González", "05/03/1968");
  
  // Generación de nietos para Luisa
  familyTree.insertChild(familyTree.root.children[1], "Juan Perez", "10/12/1967");
  familyTree.insertChild(familyTree.root.children[1], "Isabel Perez", "15/06/1970");
  
  // Generación de bisnietos para Maria
  familyTree.insertChild(familyTree.root.children[0].children[0], "Camilo Orozco", "12/03/1990");
  familyTree.insertChild(familyTree.root.children[0].children[0], "Valeria Orozco", "25/07/1992");
  
  // Generación de bisnietos para Pedro
  familyTree.insertChild(familyTree.root.children[0].children[1], "Sofia González", "10/11/1995");
  familyTree.insertChild(familyTree.root.children[0].children[1], "Mateo González", "05/09/1998");
  
  // Generación de bisnietos para Juan
  familyTree.insertChild(familyTree.root.children[1].children[0], "Luisa Perez", "15/06/1994");
  familyTree.insertChild(familyTree.root.children[1].children[0], "Andres Perez", "20/08/1998");
  
  // Generación de bisnietos para Isabel
  familyTree.insertChild(familyTree.root.children[1].children[1], "Valentina Lopez", "01/01/1999");
  familyTree.insertChild(familyTree.root.children[1].children[1], "David Lopez", "05/03/2000");
  
  // Imprimir la familia en diferentes órdenes
  console.log("Recorrido Preorder:");
  familyTree.preOrder();
  
  console.log("\nRecorrido Postorder:");
  familyTree.postOrder();
  
  console.log("\nRecorrido Inorder:");
  familyTree.inOrder();
  
