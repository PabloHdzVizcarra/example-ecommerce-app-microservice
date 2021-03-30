import { Channel } from 'amqplib/callback_api'
import { EventsTypes } from './EventsTypes'
import { UserWithBilling } from './UserWithBilling'

export class EventManager {
  static eventEmitter: Channel
  private dataUser: UserWithBilling

  constructor(eventEmitter: Channel, data: { name: string; money: number }) {
    EventManager.eventEmitter = eventEmitter

    this.dataUser = new UserWithBilling(data.name, data.money)
  }

  static createEvent() {}

  static handleEvents(data: { [key: string]: any }) {
    console.log(`Received Event ${data.typeEvent}`)
    switch (data.typeEvent as EventsTypes) {
      case 'ORDER_PROCESSING_COMPLETED':
        this.productPayment(data)
        break
      case 'PAYMENT_PROCESSING_COMPLETED':
        break
    }
  }

  static productPayment(data: { [key: string]: any }) {
    console.log(`price product is ${data.price}`)

    console.log('payment article')
  }
}
