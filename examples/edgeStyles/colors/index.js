/* global vis */
// create an array with nodes
var nodes = new vis.DataSet([
  { id: 1, label: 'node\none', shape: 'box', color: '#97C2FC' },
  { id: 2, label: 'node\ntwo', shape: 'circle', color: '#FFFF00' },
  { id: 3, label: 'node\nthree', shape: 'diamond', color: '#FB7E81' },
  { id: 4, label: 'node\nfour', shape: 'dot', size: 10, color: '#7BE141' },
  { id: 5, label: 'node\nfive', shape: 'ellipse', color: '#6E6EFD' },
  { id: 6, label: 'node\nsix', shape: 'star', color: '#C2FABC' },
  { id: 7, label: 'node\nseven', shape: 'triangle', color: '#FFA807' },
  { id: 8, label: 'node\neight', shape: 'triangleDown', color: '#6E6EFD' }
])

// create an array with edges
var edges = new vis.DataSet([
  { from: 1, to: 8, color: { color: 'red' } },
  { from: 1, to: 3, color: 'rgb(20,24,200)' },
  { from: 1, to: 2, color: { color: 'rgba(30,30,30,0.2)', highlight: 'blue' } },
  { from: 2, to: 4, color: { inherit: 'to' } },
  { from: 2, to: 5, color: { inherit: 'from' } },
  { from: 5, to: 6, color: { inherit: 'both' } },
  { from: 6, to: 7, color: { color: '#ff0000', opacity: 0.3 } },
  { from: 6, to: 8, color: { opacity: 0.3 } }
])

// create a network
var container = document.getElementById('mynetwork')
var data = {
  nodes: nodes,
  edges: edges
}
var options = {
  nodes: {
    shape: 'circle'
  }
}
new vis.Network(container, data, options)
