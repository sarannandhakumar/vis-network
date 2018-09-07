/* global vis */
// create an array with nodes
var nodes = new vis.DataSet([
  { id: 1, label: 'Node 1' },
  { id: 2, label: 'Node 2' },
  { id: 3, label: 'Node 3' },
  { id: 4, label: 'Node 4' },
  { id: 5, label: 'Node 5' },
  { id: 6, label: 'Node 6' }
])

// create an array with edges
var edges = new vis.DataSet([
  { from: 1, to: 3, dashes: true },
  { from: 1, to: 2, dashes: [5, 5] },
  { from: 2, to: 4, dashes: [5, 5, 3, 3], background: false },
  { from: 2, to: 5, dashes: [2, 2, 10, 10] },
  {
    from: 2,
    to: 6,
    dashes: false,
    background: {
      enabled: true,
      color: 'rgba(111,111,111,0.5)',
      size: 10,
      dashes: [20, 10]
    }
  }
])

// create a network
var container = document.getElementById('mynetwork')
var data = {
  nodes: nodes,
  edges: edges
}
var options = {
  edges: {
    shadow: true,
    smooth: true,
    background: {
      enabled: true,
      color: '#ff0000'
    }
  }
}

new vis.Network(container, data, options)
