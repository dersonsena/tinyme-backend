import { AddUrlRepository, UrlModel, UrlWasUsedRepository } from '@/application/contracts'

export class UrlWasUsedRepositorySpy implements UrlWasUsedRepository {
  async urlWasUsed(url: string): Promise<boolean> {
    return false
  }
}

export class AddUrlRepositorySpy implements AddUrlRepository {
  async addUrl(urlModel: UrlModel): Promise<UrlModel> {
    return { ...urlModel, id: 1000 }
  }
}
