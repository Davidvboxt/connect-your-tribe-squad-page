// Importeer express uit de node_modules map
import express from 'express'

// Verteld waar het de data uit moet halen
const url = 'https://whois.fdnd.nl/api/v1/squad/squad-b-2022'
const data = await fetch(url)
  .then((response) => response.json())
  .catch((error) => error)

console.log(data)

// Maak een nieuwe express app
const app = express()

// Stel in hoe we express gebruiken
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', (request, response) => {
  console.log(request.query.squad)

  response.render('index', data)
})

// Stel het poortnummer in en start express
app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})