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
linkedList.prototype.checkDuplicate = function(node) {
    var current = this.head
    while (current) {
        if (current.value === node.value) {
            return true
        } else {
            current = current.next
        }
    }
    return false
}
var Graph = function(v) {
    this.V = v
    this.adj = []
    for (i = 0; i < v; i++) {
        this.adj[i] = new linkedList()
        this.adj[i].push(i)
    }
}
Graph.prototype.addEgde(s, x) {
    this.adj[s].next = this.adj[x]
}
Graph.prototype.isReachable(s, x) {
    if (s === x) {
        return true
    }

}