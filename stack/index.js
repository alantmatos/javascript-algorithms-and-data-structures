
// // STACK = LIFO
// // Queue = FIFO


class Node {
    constructor(data){
      this.data = data;
      this.next = null;
    }
  }
  
  class Stack{
    constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    
    push(data){
      let newNode = new Node(data);    
      if(!this.head){
        this.head = newNode;
        this.tail = newNode;
      } else {
        let temp = this.head;
        this.head = newNode;
        this.head.next = temp;
      }
      this.length++;
      return this.length;
    }
    
    pop(){    
      if(!this.head) return null;
      
      let temp = this.head;
      if(this.head === this.tail) this.tail = null;
      
      this.head = this.head.next;
      this.length--;
      return temp.data;    
    }
    
    
    print(){
      let current = this.head;
      while(current){
        console.log(current.data)
        current = current.next
      }
    }
    
    
    
  }
  
  
//   const stack = new Stack();
//   stack.push(100)
//   stack.push(200)
//   stack.print()
  