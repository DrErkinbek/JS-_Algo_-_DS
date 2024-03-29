class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }
    push(val){
        var newNode = new Node(val);
        if(this.length === 0 ){
            this.head = newNode;
            this.tail - newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if (!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift(){
        if(this.length === 0) return undefined;
        var oldHead = this.head;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
}

list = new DoubleLinkedList();
list.push("Erik");
list.push("Argen");
list.push("Darman");

list.shift();
console.log(list);
