import { Channel } from 'amqplib/callback_api'
import { EventsTypes } from '../types/EventsTypes'
import { DataOrderProduct } from './OrderProduct'

export class EventManager {
  static eventEmitter: Channel
  constructor(eventEmitter: Channel) {
    EventManager.eventEmitter = eventEmitter
  }

  static createEvent(data: DataOrderProduct) {
    const dataToSent = this.addEventField(data, 'ORDER_PROCESSING_COMPLETED')
    EventManager.eventEmitter.publish(
      'ecommerce-app',
      'event-ecommerce',
      Buffer.from(JSON.stringify(dataToSent))
    )

    console.log(`Sent event ${dataToSent.typeEvent}`)
  }

  static addEventField(data: DataOrderProduct, event: EventsTypes) {
    return {
      ...data,
      typeEvent: event,
    }
  }
}
