import { AddUrlRepository, UrlModel, UrlWasUsedRepository } from '@/application/contracts'

export class UrlWasUsedRepositorySpy implements UrlWasUsedRepository {
  async verify(url: string): Promise<boolean> {
    return false
  }
}

export class AddUrlRepositorySpy implements AddUrlRepository {
  async add(urlModel: UrlModel): Promise<boolean> {
    return true
  }
}
