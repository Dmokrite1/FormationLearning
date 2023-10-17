const express = require("express")
const BlaguesAPI = require('blagues-api')
require('dotenv').config()

const TOKEN = process.env.API_TOKEN
const apiUrl = process.env.JOKE_API_URL
const blagues = new BlaguesAPI(TOKEN)

const app = express()
const port = process.env.PORT || 3000

app.get('/blague/v1', async (req, res) => {
  const response = await fetch (apiUrl, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
  res.send(await response.json())
})

app.get('/blague/v2', async (req, res) => {
  const jokes = []
  try {
    for (let i = 0; i < 10; i++) {
      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        }
      })
      const joke = await response.json()
      jokes.push(joke)
    }
    res.json(jokes)
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des blagues.' })
  }
})

app.get('/blague/v3', async (req, res) => {
    const response = await blagues.random()
    res.send(response)
})

app.listen(port, () => {
    console.log(`Vous êtes connecté sur le http://localhost:${port}`)
})