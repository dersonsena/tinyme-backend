import { AddUrlRepository, UrlModel, UrlWasUsedRepository } from '@/application/contracts'
import { DbConnection } from '@/adapters/contracts'
import { UrlStatus } from '@/domain/entities'

export class UrlRepository implements AddUrlRepository, UrlWasUsedRepository {
  constructor(private readonly dbConnection: DbConnection) {}

  async addUrl(urlModel: UrlModel): Promise<UrlModel> {
    await this.dbConnection.connect()

    const model = {
      ...urlModel,
      id: await this.dbConnection.insert('urls', urlModel),
      status: urlModel.status || UrlStatus.ACTIVE
    }

    await this.dbConnection.disconnect()

    return model
  }

  async urlWasUsed(url: string): Promise<boolean> {
    await this.dbConnection.connect()

    const urlRecord = await this.dbConnection.fetchOne('urls', {
      conditions: [{ column: 'uuid', value: url, operator: '=' }]
    })

    if (!urlRecord || urlRecord === null) {
      return false
    }

    await this.dbConnection.disconnect()

    return true
  }
}
