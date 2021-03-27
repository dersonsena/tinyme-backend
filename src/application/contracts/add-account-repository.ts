import { Account } from '../../domain/entities'
import { AccountInputBoundary } from '../../domain/usecases'

export interface AddAccountRepository {
  add: (account: AccountInputBoundary) => Promise<Account>
}
