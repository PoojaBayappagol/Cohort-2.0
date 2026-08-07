import pqr from "./app.js"


var h1 = React.createElement('h1', { id: 'heading' }, 'Hello Everyone');

var abc=document.querySelector('#container')

var root=ReactDOM.createRoot(abc)

root.render(pqr())