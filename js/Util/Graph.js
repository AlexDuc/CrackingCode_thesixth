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
Graph.prototype.findEdges = function(node) {
    if (this.V[node] === undefined) {
      return 'node does not exist';
    } else {
      return this.nodes[node];
    }
  };
  Graph.prototype.hasNode = function(node) {
    return this.V[node] !== undefined;
  };
module.exports = Graph;