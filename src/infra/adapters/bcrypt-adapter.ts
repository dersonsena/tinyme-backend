import { Encrypter } from '../../application/contracts'
import bcrypt from 'bcrypt'

export class BCryptAdapter implements Encrypter {
  constructor (
    private readonly salt: number
  ) {}

  async encrypt (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return await new Promise(resolve => resolve(hash))
  }
}
