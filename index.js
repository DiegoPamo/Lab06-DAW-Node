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
    res.send('<h1>Pagina de Inico</h1>')
  })
  
  app.get('/api/persons', (req, res) => {
    res.json(agendaTelefonica)
  })
  
  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const agenda = agendaTelefonica.find(agenda => agenda.id === id)
    if (agenda) {
      response.json(agenda)
    } else {
      response.status(404).end()
    }
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    agendaTelefonica = agendaTelefonica.filter(agenda => agenda.id !== id)
    response.status(204).end()
  })

  app.get('/info', (req, res) => {
    const persons = agendaTelefonica.length
    res.send('<h3>PhoneBook has info for '+persons+' people</h3>'+'<h3>Hora de la Solicitud '+new Date() +'</h3>')
  })


const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)