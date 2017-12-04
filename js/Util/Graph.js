var Graph = function() {
    this.V = {}
}
Graph.prototype.addNode = function(value) {
    if(V[value]) {
        return `node of value ${value} already exists `
    }
    V[value] = {}
}
Graph.prototype.addEgde = function(s, t) {
    if(!V[s] || !V[t]) {
        return `node not exists `
    }
    if(V[s][t]) {
        return `edge ${s} - ${t} already exists`
    }
    V[s][t] = true
}
module.exports = Graph;