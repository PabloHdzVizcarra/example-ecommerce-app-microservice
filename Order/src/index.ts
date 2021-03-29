import express from 'express'
import { orderController } from './infrastucture/infrastructure'

const app = express()
app.use(express.json())

app.post('/api/create-order', orderController)

app.listen(4200, () => {
  console.log('Order Service listening in port 4200')
})
