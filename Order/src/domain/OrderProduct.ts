export type DataOrderProduct = {
  name: string
  price: number
  quantity: number
  product: string
  id: string
}

export class OrderProduct {
  private name: string
  private product: string
  private price: number
  private quantity: number
  private id: string

  constructor(name: string, product: string, price: number, quantity: number) {
    this.name = name
    this.product = product
    this.price = price
    this.quantity = quantity
    this.id = this.generateID()
  }

  public toJson(): DataOrderProduct {
    return {
      name: this.name,
      price: this.price,
      product: this.product,
      quantity: this.quantity,
      id: this.id,
    }
  }

  public generateID(): string {
    return Math.random().toString() + Math.random().toString()
  }
}
