
// //Singly linked lists



class Node{
    constructor(data){
      this.data = data;
      this.next = null;
    }
  }
  
  class SinglyLinkedList{
    constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    
    push(data){
      let newNode = new Node(data);
      if(!this.head){
        this.head = newNode;
        this.tail = this.head
      } else {      
        this.tail.next = newNode;
        this.tail = newNode;
      }
       this.length ++;
      return this;
    }
    
    pop(){
      if(!this.head) return undefined;
      
      let current = this.head;
      let newTail = current;
      while(current.next){
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;    
      if(this.length === 0){
        this.head = null;
        this.tail = null;
      }
      return current
    }

  
    
    
  }
  
  
  const list = new SinglyLinkedList;
  
  
  