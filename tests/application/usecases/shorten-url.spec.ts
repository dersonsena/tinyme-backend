import faker from 'faker'
import { ShortenUrlUseCase } from '@/domain/usecases'
import { InvalidParamError } from '@/adapters/errors'
import { ShortenUrl } from '@/application/usecases/shorten-url'
import { AddUrlRepository, UrlNameGenerator, UrlWasUsedRepository } from '@/application/contracts'
import {
  AddUrlRepositorySpy,
  UrlNameGeneratorSpy,
  UrlWasUsedRepositorySpy
} from '@/tests/application/mocks'
import { throwError } from '@/tests/helpers'

type SutTypes = {
  sut: ShortenUrlUseCase
  urlWasUsedRepositorySpy: UrlWasUsedRepository
  addUrlRepositorySpy: AddUrlRepository
  urlNameGeneratorSpy: UrlNameGenerator
}

const makeSut = (): SutTypes => {
  const urlWasUsedRepositorySpy = new UrlWasUsedRepositorySpy()
  const addUrlRepositorySpy = new AddUrlRepositorySpy()
  const urlNameGeneratorSpy = new UrlNameGeneratorSpy()
  const sut = new ShortenUrl(urlWasUsedRepositorySpy, addUrlRepositorySpy, urlNameGeneratorSpy)

  return {
    sut,
    urlWasUsedRepositorySpy,
    addUrlRepositorySpy,
    urlNameGeneratorSpy
  }
}

describe('ShortenUrlUseCase', () => {
  it('Should throw an Error if invalid URL is provided', async () => {
    const { sut } = makeSut()
    const promise = sut.handle({ longUrl: faker.random.word() })

    await expect(promise).rejects.toThrow(new InvalidParamError('longUrl'))
  })

  it('Should throw an Error if URL already used previously', async () => {
    const { sut, urlWasUsedRepositorySpy } = makeSut()
    jest.spyOn(urlWasUsedRepositorySpy, 'verify').mockImplementationOnce(throwError)

    const promise = sut.handle({ longUrl: faker.internet.url() })

    await expect(promise).rejects.toThrow(new Error())
  })

  it('Should throw an Error if there is an error on generate url name', async () => {
    const { sut, urlNameGeneratorSpy } = makeSut()

    jest.spyOn(urlNameGeneratorSpy, 'generate').mockImplementationOnce(throwError)

    const promise = sut.handle({ longUrl: faker.internet.url() })

    await expect(promise).rejects.toThrow(new Error())
  })

  it('Should throw an error if there is an error adding url', async () => {
    const { sut, addUrlRepositorySpy } = makeSut()
    jest.spyOn(addUrlRepositorySpy, 'add').mockImplementationOnce(throwError)

    const promise = sut.handle({ longUrl: faker.internet.url() })

    await expect(promise).rejects.toThrow(new Error())
  })

  it('Should returns correct original address', async () => {
    const { sut, urlNameGeneratorSpy } = makeSut()
    const longUrl = faker.internet.url()
    const outputBoundary = await sut.handle({ longUrl })

    expect(outputBoundary).toEqual({
      originalAddress: longUrl,
      shortenedUrl: `https://tinyme.cc/${urlNameGeneratorSpy.urlName}`,
      alias: urlNameGeneratorSpy.urlName
    })
  })
})
