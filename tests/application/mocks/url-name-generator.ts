import faker from 'faker'
import { UrlNameGenerator } from '@/application/contracts'

export class UrlNameGeneratorSpy implements UrlNameGenerator {
  public urlName: string

  async generate(): Promise<string> {
    this.urlName = faker.database.column()
    return this.urlName
  }
}
