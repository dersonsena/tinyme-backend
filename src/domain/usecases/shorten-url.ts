export interface ShortenUrlUseCase {
  handle: (inputBoundary: ShortenUrlInput) => Promise<ShortenUrlOutput>
}

export type ShortenUrlInput = {
  longUrl: string
}

export type ShortenUrlOutput = {
  originalAddress: string
  shortenedUrl: string
  alias: string
}
