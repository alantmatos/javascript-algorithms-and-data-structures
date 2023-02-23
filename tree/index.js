
// // Binary Search Tree

class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // insert(data) {
    //     let newNode = new Node(data);
    //     if (!this.root) {
    //         this.root = newNode;
    //         return this
    //     } else {
    //         let current = this.root;
    //         while (true) {
    //             if (data === current.value) return undefined;
    //             if (data < current.data) {
    //                 if (current.left === null) {
    //                     current.left = newNode;
    //                     return
    //                 } else {
    //                     current = current.left;
    //                 }
    //             } else if (data > current.data) {
    //                 current.right = newNode;
    //                 return
    //             } else {
    //                 current = current.right;
    //             }
    //         }
    //     }
    // }


    // // easier to read solution
    insert(data) {

        const newNode = new Node(data);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;

        while (true) {
            if (currentNode.data === data) {
                return null;
            }

            if (currentNode.data > data && currentNode.left) {
                currentNode = currentNode.left;
                continue;
            }

            if (currentNode.data < data && currentNode.right) {
                currentNode = currentNode.right
                continue;
            }

            // at this point, we know it reached to leaf for new node.
            if (currentNode.data > data) {
                currentNode.left = newNode;
            }

            if (currentNode.data < data) {
                currentNode.right = newNode;
            }

            return this;
        }
    }


    // // recursive call insert method, ideal.
    // insert(data){
    //     var newNode = new Node(data);
    //     if (traverse(this.root)) this.root = newNode;

    //     function traverse(current){
    //         if (current === null) return true;

    //         if (newNode.data > current.data) {
    //             if (traverse(current.right)) current.right = newNode;
    //         } else if (newNode.data < current.data) {
    //             if (traverse(current.left)) current.left = newNode;
    //         }

    //         return false;
    //     }

    //     return this;
    // }




    find(data) {
        if (this.root === null) return false;

        let current = this.root;
        let found = false;

        while (current && !found) {
            if (data < current.data) {
                current = current.left;
            } else if (data > current.data) {
                current = current.right
            } else {
                found = true;
            }
        }
        if (!found) return false;
        return current;
    }

// // traversing a tree, 
// Breadth-First-Search  ( Horizontaly ) 
BFS(){
    let node = this.root
    let data = [];
    let queue = [];

    while(queue.length){
        node = queue.shift();
        data.push(node.data);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return data
}


// // traversing a tree
// // Depth-First-Search
DFS(){
    let data = [];
    function traverse(node){
        data.push(node.data);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
}







}


let tree = new BinarySearchTree()
