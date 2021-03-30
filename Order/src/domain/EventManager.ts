import { Channel } from 'amqplib/callback_api'
import { DataOrderProduct } from './OrderProduct'

export class EventManager {
  static eventEmitter: Channel
  constructor(eventEmitter: Channel) {
    EventManager.eventEmitter = eventEmitter
  }

  static createEvent(data: DataOrderProduct) {
    EventManager.eventEmitter.publish(
      'ecommerce-app',
      'event-ecommerce',
      Buffer.from(JSON.stringify(data))
    )

    console.log('Send Event to RabbitMQ')
  }
}
