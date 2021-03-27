import { AddAccountRepository } from '../../contracts'
import { AddAccount, AccountInputBoundary, Encrypter, AccountOutputBoundary } from './contracts'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly encrypter: Encrypter,
    private readonly addAccountRepository: AddAccountRepository
  ) {}

  async add (accountData: AccountInputBoundary): Promise<AccountOutputBoundary> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password)
    return await this.addAccountRepository.add({ ...accountData, password: hashedPassword })
  }
}
