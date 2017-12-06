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
            // this.min.pop()
        return item
    }
}
stack.prototype.printStack = function() {
    console.log(JSON.stringify(this.storage))
    console.log('number of elements', this.count)
}
setOfStack = function(limit) {
    var stackSet = []
    var stackLimit = limit
}
setOfStack.prototype.push = function(val) {
    if (this.stackSet.length === 0 || this.stackSet[this.stackSet.length - 1].length === this.stackLimit) {
        var newStack = []
        newStack.push(val)
        this.stackSet.push(newStack)
    } else {
        this.stackSet[this.stackSet.length - 1].push(val)
    }
}
setOfStack.prototype.pop = function() {
    if (this.stackSet[this.stackSet.length - 1].length === 0) {
        this.stackSet.pop()
    }
    this.stackSet[this.stackSet.length - 1].pop()
}
setOfStack.prototype.popAt = function(index) {
    this.stackSet[index].pop()
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

    return this.outbox.pop()
}
Queue.prototype.peek = function() {
    if (this.inbox.count === 0) {
        if (this.outbox.count === 0) {
            return undefined
        } else {
            this.inbox.push(this.outbox.pop())
        }
    }
    return this.outbox.pop()
}
Queue.prototype.isEmpty = function() {
    if (this.inbox.count === 0 && this.outbox.count === 0) {
        return true
    } else {
        return false
    }
}
stack.prototype.sort = function() {
    var numberSortedElement = 0
    var temporaryStack = new stack()
    while (this.count > 0) {
        if (temporaryStack.count === 0) {
            temporaryStack.push(this.pop())
            numberSortedElement += 1
        } else {
            var item = this.pop()
            while (temporaryStack.count > 0) {
                var peek = temporaryStack.pop()
                if (item < peek) {
                    this.push(peek)
                } else {
                    temporaryStack.push(peek)
                    temporaryStack.push(item)
                    break
                }
            }

            if (temporaryStack.count === 0) {
                temporaryStack.push(item)
            }
            numberSortedElement += 1
            if (temporaryStack.count < numberSortedElement) {
                var d = numberSortedElement - temporaryStack.count
                for (var i = 0; i < d; i++) {
                    temporaryStack.push(this.pop())
                }
            }
        }

    }
    while (temporaryStack.count > 0) {
        this.push(temporaryStack.pop())
    }
}

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
var queueLinkedList = function() {
    this.queue = new linkedList()
}
queueLinkedList.prototype.enqueue = function(val) {
    this.queue.push(val)
}
queueLinkedList.prototype.dequeueAny = function() {
    if (this.queue.head) {
        var item = this.queue.head.value
        this.queue.head = this.queue.head.next
        return item
    } else {
        return undefined
    }
}
queueLinkedList.prototype.dequeueDog = function() {
    if (this.queue.head) {
        var current = this.queue.head
        var previous = this.queue.head
        while (current && current.value.indexOf('Dog') < 0) {
            previous = current
            current = current.next
        }
        if (current) {
            previous.next = current.next
            current.next = null
            return current.value
        } else {
            return undefined
        }
    } else {
        return undefined
    }
}
queueLinkedList.prototype.dequeueCat = function() {
    if (this.queue.head) {
        var current = this.queue.head
        var previous = this.queue.head
        while (current && current.value.indexOf('Cat') < 0) {
            previous = current
            current = current.next
        }
        if (current) {
            previous.next = current.next
            current.next = null
            return current.value
        } else {
            return undefined
        }
    } else {
        return undefined
    }
}
queueLinkedList.prototype.printList = function() {
        this.queue.printList()
    }
    // var exampleStack = new stack()
    // exampleStack.push(1)
    // exampleStack.push(4)
    // exampleStack.push(6)
    // exampleStack.push(2)
    // exampleStack.push(3)
    // exampleStack.push(9)
    // exampleStack.printStack()
    // exampleStack.sort()
    // exampleStack.printStack()

var animalShelter = new queueLinkedList()
animalShelter.enqueue('Cat1')
animalShelter.enqueue('Cat2')
animalShelter.enqueue('Dog1')
animalShelter.enqueue('Cat3')
animalShelter.enqueue('Dog2')
animalShelter.enqueue('Dog3')
animalShelter.enqueue('Cat4')
animalShelter.printList()

console.log('remove dog', animalShelter.dequeueDog())
animalShelter.printList()