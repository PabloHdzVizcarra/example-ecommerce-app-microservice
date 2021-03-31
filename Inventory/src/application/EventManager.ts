import { Channel } from 'amqplib/callback_api'
import { dataOrderDispatched, InventoryEvent, PaymentData } from './Types'

export class EventManager {
  static eventEmitter: Channel

  constructor () {}

  static handleEvents (data: PaymentData) {
    switch (data.typeEvent) {
      case 'ORDER_PROCESSING_COMPLETED':
        console.log(data.typeEvent)
        break

      case 'PAYMENT_PROCESSING_COMPLETED':
        console.log(data.typeEvent)
        this.processPayment(data)
        break

      case 'ORDER_DISPATCHED':
        console.log(data.typeEvent)
        break
      default:
        console.log('Unknown event type')
        break
    }
  }

  private static processPayment (data: PaymentData) {
    console.log(`Processing payment to ${data.name}`)
    const dataUpdateInventory: InventoryEvent = {
      typeEvent: 'UPDATE_INVENTORY',
      product: 'milk',
      quantity: 10
    }

    const dataOrderDispatched: dataOrderDispatched = {
      typeEvent: 'ORDER_DISPATCHED',
      idOrder: '125dfgy78',
      status: true
    }

    EventManager.eventEmitter.publish(
      'ecommerce-app',
      'event-ecommerce',
      Buffer.from(JSON.stringify(dataUpdateInventory))
    )
    EventManager.eventEmitter.publish(
      'ecommerce-app',
      'event-ecommerce',
      Buffer.from(JSON.stringify(dataOrderDispatched))
    )
  }
}
