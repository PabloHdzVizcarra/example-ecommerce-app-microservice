import app from '.'
import amqp from 'amqplib/callback_api'

amqp.connect('amqp://192.168.100.9:5672', (error, connection) => {
  if (error) throw error

  connection.createChannel((error, channel) => {
    if (error) throw error

    channel.assertExchange('ecommerce-app', 'topic', {
      durable: true
    })

    console.log('connect to RabbitMQ')
  })
})

app.listen(4201, () => {
  console.log('Order Service listening in port 4201')
})
