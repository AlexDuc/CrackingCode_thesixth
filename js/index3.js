var stack = function() {
    var count = 0
    var min = []
    var storage = {}
}
stack.prototype.push = function(value) {
    this.storage[this.count] = value
    if (this.count === 0) {
        this.min.push(value)
    } else {
        if (value < this.min[this.min.length - 1]) {
            this.min.push(value)
        }
    }
    this.count += 1
}
stack.prototype.pop = function() {
    if (this.count === 0) {
        return undefined
    } else {
        var item = this.storage[this.count]
        delete this.storage[this.count]
        this.count -= 1
        this.min.pop()
        return item
    }
}
setOfStack = function (limit) {
    var stackSet = []
    var stackLimit = limit
}
setOfStack.prototype.push = function (val) {
    if(this.stackSet.length === 0 || this.stackSet[this.stackSet.length - 1].length === this.stackLimit) {
        var newStack = []
        newStack.push(val)
        this.stackSet.push(newStack)
    } else {
        this.stackSet[this.stackSet.length - 1].push(val)
    }
}
setOfStack.prototype.pop= function () {
    if(this.stackSet[this.stackSet.length - 1].length === 0) {
        this.stackSet.pop()
    }
    this.stackSet[this.stackSet.length - 1].pop()
}
setOfStack.prototype.popAt= function (index) {
    this.stackSet[index].pop()
}
MyQueue = function {
    var stack1 = []
    var stack2 = []
}