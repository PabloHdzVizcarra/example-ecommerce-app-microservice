import { Request, Response } from 'express'

export function orderController(req: Request, res: Response) {
  res.send('orderController')
}
