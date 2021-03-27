import bcrypt from 'bcrypt'
import { BCryptAdapter } from '../../../src/infra/adapters/bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return await new Promise(resolve => resolve('hash'))
  }
}))

const salt = 12

const makeSut = (): BCryptAdapter => {
  return new BCryptAdapter(salt)
}

describe('BCryptAdapter', () => {
  it('Should call bcrypt with correct values', async () => {
    const bcryptSpy = jest.spyOn(bcrypt, 'hash')
    await makeSut().encrypt('any_value')

    expect(bcryptSpy).toHaveBeenCalledWith('any_value', salt)
  })

  it('Should return a hash on success', async () => {
    const sut = makeSut()
    const hash = await sut.encrypt('any_value')

    expect(hash).toBe('hash')
  })

  it('Should throw an Error if BCrypt throws Error', async () => {
    const sut = makeSut()
    jest.spyOn(bcrypt, 'hash').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const promise = sut.encrypt('any_value')

    await expect(promise).rejects.toThrow()
  })
})
