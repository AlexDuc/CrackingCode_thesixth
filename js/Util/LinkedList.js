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