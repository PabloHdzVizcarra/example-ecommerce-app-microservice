import app from '.'
import amqp from 'amqplib/callback_api'

import { orderController } from './infrastucture/orderController'
import { EventManager } from './domain/EventManager'

amqp.connect('amqp://192.168.100.9:5672', (error, connection) => {
  if (error) throw error

  connection.createChannel((error, channel) => {
    if (error) throw error

    channel.assertExchange('ecommerce-app', 'topic', {
      durable: true,
    })

    new EventManager(channel)

    console.log('connect to RabbitMQ')
  })
})

app.post('/api/create-order', orderController)

app.listen(4200, () => {
  console.log('Order Service listening in port 4200')
})
