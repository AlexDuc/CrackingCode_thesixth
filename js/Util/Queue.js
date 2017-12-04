Queue = function() {
    var inbox = new stack()
    var outbox = new stack()
}
Queue.prototype.add = function(item) {
    inbox.push(item)
}
Queue.prototype.remove = function() {
    if (outbox.count === 0) {
        for (var i = inbox.count - 1; i >= 0; i--) {
            outbox.push(inbox.pop)
        }
    }
    return outbox.pop()
}
Queue.prototype.peek = function() {
    if (inbox.count === 0) {
        if (outbox.count === 0) {
            return undefined
        } else {
            inbox.push(outbox.pop)
        }
    }
    return inbox.pop()
}
Queue.prototype.isEmpty = function() {
    if (inbox.count === 0 && outbox.count === 0) {
        return true
    } else {
        return false
    }
}
module.exports = Queue;