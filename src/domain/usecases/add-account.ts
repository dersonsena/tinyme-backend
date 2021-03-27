import { Account } from '../entities'

export interface AddAccount {
  add: (account: AccountInputBoundary) => Promise<AccountOutputBoundary>
}

export type AccountInputBoundary = {
  name: string
  email: string
  password: string
}

export type AccountOutputBoundary = Account;
