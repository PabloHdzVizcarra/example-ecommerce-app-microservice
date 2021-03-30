import { Channel } from 'amqplib/callback_api'
import { EventsTypes } from './EventsTypes'
import { OrderData } from './Types'
import { UserWithBilling } from './UserWithBilling'

export class EventManager {
  static eventEmitter: Channel
  private dataUser: UserWithBilling

  constructor(eventEmitter: Channel, data: { name: string; money: number }) {
    EventManager.eventEmitter = eventEmitter

    this.dataUser = new UserWithBilling(data.name, data.money)
  }

  static createEvent() {}

  static handleEvents(data: OrderData) {
    console.log(`Received Event ${data.typeEvent}`)
    switch (data.typeEvent as EventsTypes) {
      case 'ORDER_PROCESSING_COMPLETED':
        this.productPayment(data)
        break
      case 'PAYMENT_PROCESSING_COMPLETED':
        break
    }
  }

  static productPayment(data: OrderData) {
    console.log(`price product is ${data.price}`)

    EventManager.eventEmitter.publish(
      'ecommerce-app',
      'event-ecommerce',
      Buffer.from(
        JSON.stringify({
          name: 'billing event',
          typeEvent: 'BILLING',
        })
      )
    )
    console.log('payment article')
  }
}
