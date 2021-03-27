import { AddAccountRepository } from '../../../../application/contracts'
import { Account } from '../../../../domain/entities'
import { AccountInputBoundary } from '../../../../domain/usecases'
import { MongoHelper } from '../helpers'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AccountInputBoundary): Promise<Account> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const { _id, ...accountWithoudId } = result.ops[0]

    return { ...accountWithoudId, id: _id }
    // return await new Promise(resolve => resolve(null))
  }
}
