
///////////////////////////////////////////
/////////// Doubly Linked List ///////////
/////////////////////////////////////////

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}


class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    let newNode = new Node(data)

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let removedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode;
  }

  
  shift(){
    if(this.length === 0 ) return undefined;
    
    let oldHead = this.head;
    
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;    
  }
  
  unshift(value){    
    let newNode = new Node(value);
    
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    } else {    
    let currentHead = this.head;
    this.head = newNode;
    this.head.next = currentHead;
    currentHead.prev = this.head;
  }    
    this.length++;
    return this   
  } 


  print(){
    if(this.length === 0) return "List is empty";
    let current = this.head;
    
    while(current){
      console.log(current.data)
      current = current.next;      
    }
  }





}




// let dblist = new DoublyLinkedList();

// dblist.push(100)
// dblist.push(200)
// dblist.pop();
// dblist