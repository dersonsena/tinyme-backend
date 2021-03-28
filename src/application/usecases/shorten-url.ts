import { ShortenUrlInput, ShortenUrlOutput, ShortenUrlUseCase } from '@/domain/usecases'
import { InvalidParamError } from '@/adapters/errors'
import { AddUrlRepository, UrlNameGenerator, UrlWasUsedRepository } from '@/application/contracts'
import { UrlStatus } from '@/domain/entities'

export class ShortenUrl implements ShortenUrlUseCase {
  constructor(
    private readonly urlWasUsedRepository: UrlWasUsedRepository,
    private readonly addUrlRepository: AddUrlRepository,
    private readonly urlNameGenerator: UrlNameGenerator
  ) {}

  async handle(inputBoundary: ShortenUrlInput): Promise<ShortenUrlOutput> {
    const regex = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi

    if (!regex.test(inputBoundary.longUrl)) {
      throw new InvalidParamError('longUrl')
    }

    const urlWasUsed = await this.urlWasUsedRepository.verify(inputBoundary.longUrl)

    if (urlWasUsed) {
      return null
    }

    const urlName = await this.urlNameGenerator.generate()

    await this.addUrlRepository.add({
      longUrl: inputBoundary.longUrl,
      shortenedUrl: `https://tinyme.cc/${urlName}`,
      alias: urlName,
      status: UrlStatus.ACTIVE
    })

    return {
      originalAddress: inputBoundary.longUrl,
      shortenedUrl: `https://tinyme.cc/${urlName}`,
      alias: urlName
    }
  }
}
