export type OrderData = {
  name: string
  product: string
  price: number
  quantity: number
  id: string
  typeEvent: EventsTypes
}

export type EventsTypes =
  | 'ORDER_PROCESSING_COMPLETED'
  | 'PAYMENT_PROCESSING_COMPLETED'
  | 'ORDER_DISPATCHED'

export type PaymentData = {
  typeEvent: EventsTypes
  order: string
  name: string
}
