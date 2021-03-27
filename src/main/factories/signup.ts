import { DbAddAccount } from '../../application/usecases/add-account/db-add-account'
import { BCryptAdapter } from '../../infra/adapters/bcrypt-adapter'
import { EmailValidatorAdapter } from '../../infra/adapters/email-validator-adapter'
import { AccountMongoRepository } from '../../infra/repositories/mongodb/account/account-mongo-repository'
import { SignUpController } from '../../presentation/controllers/signup/signup'

export const makeSignUpController = (): SignUpController => {
  const emailValidator = new EmailValidatorAdapter()

  const encrypter = new BCryptAdapter(12)
  const accountRepository = new AccountMongoRepository()
  const addAccountUseCase = new DbAddAccount(encrypter, accountRepository)

  return new SignUpController(emailValidator, addAccountUseCase)
}
