import { Request, Response } from 'express'
import { EventManager } from '../domain/EventManager'
import { OrderProduct } from '../domain/OrderProduct'

export function orderController(req: Request, res: Response) {
  const { name, product: nameProduct, price, quantity } = req.body

  const product = new OrderProduct(name, nameProduct, price, quantity)

  EventManager.createEvent(product.toJson())

  res.send('orderController')
}
