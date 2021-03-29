import { Request, Response } from 'express'
import { OrderProduct } from '../domain/OrderProduct'

export function orderController(req: Request, res: Response) {
  const { name, product: nameProduct, price, quantity } = req.body

  const product = new OrderProduct(name, nameProduct, price, quantity)
  console.log(product.toJson())
  res.send('orderController')
}
