import { EventsTypes } from './EventsTypes'

export type OrderData = {
  name: string
  product: string
  price: number
  quantity: number
  id: string
  typeEvent: EventsTypes
}
