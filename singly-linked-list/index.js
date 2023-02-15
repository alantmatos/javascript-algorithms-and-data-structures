
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

    shift(){
      if(!this.head) return undefined;
      let currentHead = this.head;
      this.head = currentHead.next;
      this.length --;
          if(this.length === 0){
        this.tail = null;
      }
      return currentHead;
    }

    unshift(data){
      let newNode = new Node(data);
     if(!this.head){
       this.head = newNode;
       this.tail = this.head;
     } else {
       newNode.next = this.head;
       this.head = newNode;
     }
     this.length ++;
     return this;
   }

   get(index){
    if(!this.head) return undefined;
    if(index < 0 || index > this.length) return null;
    let counter = 0;
    let current = this.head;
    
    while(counter !== index){
      current = current.next;
      counter++;
    } 
    return current;    
  }
  
  set(index,value){
    let foundNode = this.get(index);
    if(!foundNode){
      return false
    } else {
      foundNode.data = value;
      return true
    }
  }

  
    
    
  }
  
  
  const list = new SinglyLinkedList;
  
  
  