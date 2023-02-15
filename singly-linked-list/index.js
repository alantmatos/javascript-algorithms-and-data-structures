
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

  insert(index, value){
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(value);
    if(index === this.length) return !!this.push(value);
    
      let prevNode = this.get(index-1);
      let nextNode = this.get(index);
      let newNode = new Node(value);
      prevNode.next = newNode;
      newNode.next = nextNode;
      this.length ++;
    
    return true 
  }
  
  remove(index){
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.shift();
    if(index === this.length) return !!this.pop();
    
    let prevNode = this.get(index-1);
    let removedNode = this.get(index);
    prevNode.next = this.get(index+1);
    
    this.length --;
    return removedNode;
  }

  reverse(){
    let current = this.head;    
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    let next = null;
    
    for(let i = 0; i < this.length; i++){
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this    
  }

  print(){
    let arr = [];
    let current = this.head;
    while(current){
      arr.push(current.data)
      current = current.next;
    }
    console.log(arr);
  }

  
    
    
  }
  
  
  const list = new SinglyLinkedList;
  
  
  