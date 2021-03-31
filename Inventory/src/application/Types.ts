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
  | 'UPDATE_INVENTORY'

export type PaymentData = {
  typeEvent: EventsTypes
  order: string
  name: string
}

export type InventoryEvent = {
  product: string
  quantity: number
  typeEvent: EventsTypes
}

export type dataOrderDispatched = {
  typeEvent: EventsTypes
  status: boolean
  idOrder: string
}
