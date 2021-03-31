import { Channel } from 'amqplib/callback_api'
import { OrderData, PaymentData } from './Types'

export class EventManager {
  static eventEmitter: Channel

  constructor () {}

  static handleEvents (data: OrderData) {
    switch (data.typeEvent) {
      case 'ORDER_PROCESSING_COMPLETED':
        EventManager.orderProcess()
        break

      case 'PAYMENT_PROCESSING_COMPLETED':
        console.log(data.typeEvent)
        break

      default:
        console.log('Unknown event type')
        break
    }
  }

  static orderProcess () {
    const order = EventManager.createOrder()

    EventManager.eventEmitter.publish('ecommerce-app', 'event-ecommerce', Buffer.from(JSON.stringify(order)))
  }

  static createOrder(): PaymentData {
    return {
      typeEvent: 'PAYMENT_PROCESSING_COMPLETED',
      name: 'order 154879',
      order: 'best offer'
    }
  }
}
