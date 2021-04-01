import { Url } from '@/domain/entities'

export interface ShortenUrlUseCase {
  handle: (inputBoundary: ShortenUrlInput) => Promise<Url>
}

export type ShortenUrlInput = {
  longUrl: string
}
