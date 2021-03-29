import express from 'express'

const app = express()
app.use(express.json())


app.listen(4200, () => {
  console.log('Order Service listening in port 4200')
})
