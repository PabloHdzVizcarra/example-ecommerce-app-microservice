import app from '.'
import amqp from 'amqplib/callback_api'
import { EventManager } from './application/EventManager'

amqp.connect('amqp://192.168.100.9:5672', (error, connection) => {
  if (error) throw error

  connection.createChannel((error, channel) => {
    if (error) throw error

    channel.assertExchange('ecommerce-app', 'topic', {
      durable: true,
    })

    channel.assertQueue(
      '',
      {
        exclusive: true,
      },
      (error, queue) => {
        if (error) throw error

        channel.bindQueue(queue.queue, 'ecommerce-app', 'event-ecommerce')
        new EventManager(channel)

        channel.consume(queue.queue, (message) => {
          const data = JSON.parse(message.content.toString())
          EventManager.handleEvents(data)
        })
      }
    )

    console.log('connect to RabbitMQ')
  })
})

app.listen(4201, () => {
  console.log('Order Service listening in port 4201')
})
