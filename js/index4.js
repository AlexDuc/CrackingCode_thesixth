function linkedList() {
    this.head = null

}
linkedList.prototype.push = function(val) {
    var node = {
        value: val,
        next: null
    }
    if (this.head === null) {
        this.head = node
    } else {
        var current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = node
    }
}
linkedList.prototype.delete = function(val) {
    var current = this.head
    if (current.value === val) {
        this.head = current.next
        current.next = null
    } else {
        var previous = current
        current = current.next
        while (current.next) {
            if (current.value === val) {
                previous.next = current.next
                current.next = null
                return
            } else {
                previous = current
                current = current.next
            }
        }
        if (current.value === val) {
            previous.next = null
        }
    }
}
linkedList.prototype.printList = function() {
    if (!this.head) {
        console.log('empty list')
    } else {
        var current = this.head
        while (current) {
            console.log(current.value)
            current = current.next
        }
    }
}
var stack = function() {
    this.count = 0
        // var min = []
    this.storage = {}
}
stack.prototype.push = function(value) {
    this.count += 1
    this.storage[this.count] = value
    if (this.count === 0) {
        // this.min.push(value)
    } else {
        // if (value < this.min[this.min.length - 1]) {
        //     // this.min.push(value)
        // }
    }
}
stack.prototype.pop = function() {
    if (this.count === 0) {
        return undefined
    } else {
        var item = this.storage[this.count]
        delete this.storage[this.count]
        this.count -= 1
        // console.log(this.storage)
        // console.log(this.count)
            // this.min.pop()
        return item
    }
}
stack.prototype.printStack = function() {
    console.log(JSON.stringify(this.storage))
    console.log('number of elements', this.count)
}
var Queue = function() {
    this.inbox = new stack()
    this.outbox = new stack()
}
Queue.prototype.add = function(item) {
    this.inbox.push(item)
}
Queue.prototype.remove = function() {
    if (this.outbox.count === 0) {
        for (var i = this.inbox.count - 1; i >= 0; i--) {
            this.outbox.push(this.inbox.pop())
        }
    }
    var item = this.outbox.pop()
    return item
}
Queue.prototype.peek = function() {
    if (this.inbox.count === 0) {
        if (this.outbox.count === 0) {
            return undefined
        } else {
            this.inbox.push(this.outbox.pop())
        }
    }
    var item = this.outbox.pop()
    return item
}
Queue.prototype.isEmpty = function() {
    if (this.inbox.count === 0 && this.outbox.count === 0) {
        return true
    } else {
        return false
    }
}

var Graph = function() {
    this.V = {}
}
Graph.prototype.addNode = function(value) {
    if(this.V[value]) {
        return `node of value ${value} already exists `
    }
    this.V[value] = {}
}
Graph.prototype.addEdge = function(s, t) {
    if(!this.V[s] || !this.V[t]) {
        return `node not exists `
    }
    if(this.V[s][t]) {
        return `edge ${s} - ${t} already exists`
    }
    this.V[s][t] = true
}
Graph.prototype.findEdges = function(node) {
    if (this.V[node] === undefined) {
      return 'node does not exist';
    } else {
      return this.V[node];
    }
  };
  Graph.prototype.hasNode = function(node) {
    return this.V[node] !== undefined;
  };
var BST = function (value) {
    this.root = value
    this.left = null
    this.right = null
}
BST.prototype.insert = function(value) {
    if(value <= this.root) {
        if(this.left === null) {
            var newNode = new BST(value)
            this.left = newNode
        } else {
            this.left.insert(value)
        }
    } else {
        if(this.right === null) {
            var newNode = new BST(value)
            this.right = newNode
        } else {
            this.right.insert(value)
        }
    }
}
BST.prototype.printBST = function() {
    var level = [];
    var q = new Queue();
    var nextq = new Queue();
    var currNode;
  
    q.add(this);
    while (!q.isEmpty()) {
      currNode = q.remove();
      level.push(currNode.root);
      if (currNode.left !== null) {
        nextq.add(currNode.left);
      }
      if (currNode.right !== null) {
        nextq.add(currNode.right);
      }
      if (q.isEmpty()) {
        console.log(level.join(','));
        level = [];
        q = nextq;
        nextq = new Queue();
      }
    }
}
function isReachables(s, t, graph) {
    var queue1 = new Queue();
    var queue2 = new Queue();
    var visited1 = {}
    var visited2 = {}
    if(graph.hasNode(s)) {
        for (var edge in graph.findEdges(s)) {
            queue1.add(edge)
        }
    }
    if(graph.hasNode(t)) {
        for (var edge2 in graph.findEdges(t)) {
            queue2.add(edge2)
        }
    }
    var nextNode1 = queue1.remove()
    var nextNode2;
    while(!queue1.isEmpty() || !queue2.isEmpty()) {
        if(!queue1.isEmpty()) {
            nextNode1 = queue1.remove()
            if(nextNode1 === t) {
                return true
            }
            if (visited1[nextNode1] === undefined) {
                visited1[nextNode1] = true;
                if(graph.hasNode(nextNode1)) { 
                    for(var edge in graph.findEdges(nextNode1)) {
                        queue1.add(edge)
                    }
                }
            }
        }
        if(!queue2.isEmpty()) {
            nextNode2 = queue2.remove()
            if(nextNode2 === s) {
                return true
            }
            if (visited2[nextNode2] === undefined) {
                visited2[nextNode2] = true;
                if(graph.hasNode(nextNode2)) { 
                    for(var edge2 in graph.findEdges(nextNode2)) {
                        queue2.add(edge2)
                    }
                }
            }
        }
    }
    return false
}
function createSortedBST (array, start, end) {
    if(start > end) {
        return null
    }
    var mid = Math.round((end + start)/2)
    var root = array[mid]
    var newBST = new BST(root)
    newBST.left = createSortedBST(array, start, mid - 1)
    newBST.right = createSortedBST(array, mid + 1, end)
    return newBST
}
function createDepthLinkedList (BT) {
    
}
var listOfDepths = function(bst) {
    var listOfLists = [];
    var list = null;
    var newNode;
    var q = new Queue();
    var nextq = new Queue();
    var currNode = bst;
  
    q.add(currNode);
    while (!q.isEmpty()) {
      currNode = q.remove();
      newNode = new LinkedList(currNode.value);
      newNode.next = list;
      list = newNode;
      if (currNode.left !== null) {
        nextq.add(currNode.left);
      }
      if (currNode.right !== null) {
        nextq.add(currNode.right);
      }
      if (q.isEmpty()) {
        listOfLists.push(list);
        list = null;
        q = nextq;
        nextq = new Queue();
      }
    }
    return listOfLists;
  };
  
  /* TEST */
  // 1, 2, 3, 4, 5, 6, 7
  var tree = new BST(4);
  tree.insert(2);
  tree.insert(6);
  tree.insert(1);
  tree.insert(3);
  tree.insert(5);
  tree.insert(7);
  
  console.log(listOfDepths(tree));
/* TEST */
var graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');

graph.addEdge('D', 'E');
// console.log(graph)
//question 4.1
console.log(isReachables('A', 'C', graph), true);
console.log(isReachables('A', 'E', graph), false);
console.log(isReachables('B', 'A', graph), true);
console.log(isReachables('D', 'E', graph), true);
//question 4.2
var sortedArray = [1, 2, 3, 4]
var sortedArrayBST = createSortedBST(sortedArray, 0, sortedArray.length - 1)
sortedArrayBST.printBST()