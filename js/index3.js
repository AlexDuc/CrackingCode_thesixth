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