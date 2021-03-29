import { Channel } from 'amqplib/callback_api'

export class EventEmitter {
  private emitter: Channel

  constructor(emitter: Channel) {
    this.emitter = emitter
  }
}
