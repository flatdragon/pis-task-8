const express = require('express')
const factorial = require('./lib/factorial')

const app = express()

app.get('/factorial/:number', (req, res) => {
  const { number } = req.params

  try {
    const result = factorial(Number(number))

    res.status(200).send(result.toString())
  } catch (error) {
    res.status(422).send(error.message)
  }
})

app.all('*', (req, res) => {
  res.send('Задание 8. Работа с Kubernetes в GitLab. Кочетыгов Андрей.')
})

module.exports = app
