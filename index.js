const express = require('express')
const app = express()

let agendaTelefonica = [
    {
      id: 1,
      name: "Arto Hellas",
      number: "040-123456",
    },
    {
      id: 2,
      name: "Arda Turan",
      number: "39-44-542163",
    },
    {
      id: 3,
      name: "Kazuma Ozora",
      number: "041-2005-12-554",
    },
    {
      id: 4,
      name: "Aurelio Rojelio",
      number: "0142-125-455-21",
    }
  ]
  app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })
  
  app.get('/api/persons', (req, res) => {
    res.json(agendaTelefonica)
  })


const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)