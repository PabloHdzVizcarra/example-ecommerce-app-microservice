import { Channel } from 'amqplib/callback_api'
import { EventsTypes } from './EventsTypes'

export class EventManager {
  static eventEmitter: Channel
  constructor(eventEmitter: Channel) {
    EventManager.eventEmitter = eventEmitter
  }

  static createEvent() {}

  static handleEvents(data: { [key: string]: any }) {
    console.log(`Received Event ${data.typeEvent}`)
    switch (data.typeEvent) {
      case 'ORDER_PROCESSING_COMPLETED':
        this.productPayment()
        break
      case 'PAYMENT_PROCESSING_COMPLETED':
        break
    }
  }

  static productPayment() {
    console.log('payment article')
  }
}
