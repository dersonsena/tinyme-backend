import { UrlNameGenerator } from '@/application/contracts'

export class RandomNameGenerator implements UrlNameGenerator {
  urlName: string = ''

  async generate(length: number = 10): Promise<string> {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length

    for (let i = 0; i < length; i++) {
      this.urlName += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    return this.urlName
  }
}
