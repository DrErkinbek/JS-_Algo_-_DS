var q = [];

q.push("first");
q.push("second");
q.push("third");
console.log(q);

q.unshift("FIRST");
q.unshift("SECOND");
q.unshift("THIRD");
q.pop();
q.pop();
q.pop();
console.log(q);

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size =  0;
    }

    enqueue(val){
        var newNode = new Node(val);

        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(val){
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

var q = new Queue();
